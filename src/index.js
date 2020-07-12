import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./styles/reset.css"

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="portfolio-1">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();