import "./App.css";
import PageRoutes from "./PageRoutes";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

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
      <Router history={history}>
        <Route component={PageRoutes} />
      </Router>
    </div>
  );
}

export default App;
