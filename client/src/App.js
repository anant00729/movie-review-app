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
        backgroundColor: "#222222",
        minHeight: "100vh",
        position: "relative",
        overflowY: "auto",
      }}
    >
      <div
        id="layout"
        style={{
          backgroundColor: "#222222",
          minHeight: "calc(100vh - 52px)",
          position: "absolute",
          marginTop: "52px",
          left: 0,
        }}
      ></div>
      <Home />
      {/* 
      <Login />
      <Register />
      <MovieReview /> */}

      <Header />
    </div>
  );
}

export default App;
