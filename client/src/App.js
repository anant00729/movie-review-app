import "./App.css";
import PageRoutes from "./PageRoutes";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { GlobalProvider } from "./global/GlobalContext";

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
      <GlobalProvider>
        <Router history={history}>
          <Route component={PageRoutes} />
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
