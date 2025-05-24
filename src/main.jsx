import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MainContext from "./useContext/MainContext.jsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <MainContext>
    <HashRouter>
      <App />
    </HashRouter>
  </MainContext>
);
