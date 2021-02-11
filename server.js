const express = require("express");
var bodyParser = require("body-parser");
const db = require("./config/database");
const cors = require("cors");
const path = require("path");
const userRouter = require("./v1/routes/user");
const reviewRouter = require("./v1/routes/review");
const movieRouter = require("./v1/routes/movie");
const { connectBouponRoutes } = require("./boupon");
const { getTestData } = require("./test");
const beautify = require('js-beautify').css

const app = express();

const fs = require('fs')

// Authenticate DB
const auth = async () => {
  try {
    await db.authenticate();
    console.log(
      "^^%&%^&^%^$%^&$%%^$%^$^ Wolla Connected to DB ^^%&%^&^%^$%^&$%%^$%^$^"
    );
  } catch (error) {
    console.log(`DB Connection failed ${err.message}`);
  }
};

auth();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public/build"));
app.use(express.static("public"));

connectBouponRoutes(app);
app.use("/v1/auth", userRouter);
app.use("/v1/review", reviewRouter);
app.use("/v1/movie", movieRouter);

app.get("/test", (req, res) => {
  fs.readFile('./test.css', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    data = beautify(data, { indent_size: 2, space_in_empty_paren: true })
    var writeStream1 = fs.createWriteStream("test1.css");
    writeStream1.write(data);
    writeStream1.end();
    

    const copyData = data.slice()
    const allImports = `import styled from "styled-components";\n\n`

    const classConverterPattern = /^\.[a-zA-Z0-9_ -]*{/gm
    const closeCurlyConverterPattern = /\}/gm
    const mediaTrackingPattern = /@media[^{]+\{([\s\S]+?})\s*}/gm
    data = allImports + data  
    let jsClass = data.replace(mediaTrackingPattern, "")
    jsClass = jsClass.replace(classConverterPattern, replacer)
    jsClass = jsClass.replace(closeCurlyConverterPattern, "`;")
    var writeStream = fs.createWriteStream("test1.js");
    writeStream.write(jsClass);
    writeStream.end();
    res.json({hello: jsClass, copyData })
  })
});

function replacer(match, p1, p2, offset, string){
  let className = 'ERROR'

  if(!!match.length && match.charAt(0) === '.'){
    if(match.includes(".")){
      match= match.replace(".", "")
    }
    if(match.includes("{")){
      match= match.replace("{", "")
    }
    match = match.trim() 
    className = match.charAt(0).toUpperCase() + match.slice(1)
    className = snakeToCamel(className)
  }
  
  return `export const ${className} = styled.div\``
}

const snakeToCamel = (str) => str.replace(
  /([-_][a-z])/g,
  (group) => group.toUpperCase()
                  .replace('-', '')
                  .replace('_', '')
                  .replace('__', '')
);

snakeToCamel('my-snake-string'); 
app.get("/getListData", (req, res) => res.json(getTestData));

const PORT = process.env.PORT || 5000;

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
