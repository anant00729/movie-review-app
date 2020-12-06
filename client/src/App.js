import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import MovieReview from "./pages/movie-review";
import Header from "./components/header";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#181818",
        minHeight: "100vh",
        position: "relative",
        overflowY: "auto",
      }}
    >
      <Header />
      <div
        id="layout"
        style={{
          marginTop: "52px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        <MovieReview />
      </div>

      {/* <Register />
      <MovieReview /> */}
    </div>
  );
}

export default App;
