import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import { Layout } from "./js/layout";
import "./styles/fonts/Neuropol-X-Rg.ttf";
import banner from "./redirect.jpg";

ReactDOM.render(
  <React.StrictMode>
    {/* <Layout /> */}
    <a className="banner" href="https://www.kuriosedu.com">
      <img src="redirect.jpg" />
    </a>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
