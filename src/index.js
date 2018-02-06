import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';

import App from "./components/app.js";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
   /* <Provider store={createStoreWithMiddleware(reducers)}> */
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>,
  /* </Provider> , */
  document.querySelector("#root")
);
