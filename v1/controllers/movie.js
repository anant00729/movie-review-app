const fetch = require("node-fetch");
exports.getMovieList = async (req, res) => {
  const pageNumber = req.body.pageNumber || 1;
  try {
    const apiRes = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=537ddc74c358cc60f2a583329383e24a&page=${pageNumber}`
    );
    const movieJson = await apiRes.json();
    res.json(movieJson);
  } catch (error) {
    res.json({
      status: false,
      message: `Something went wrong : error ${error.message}`,
    });
  }
};
