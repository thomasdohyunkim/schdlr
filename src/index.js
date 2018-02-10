import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import reducers from "./reducers";
import App from "./components/app";
import classForm from "./components/classForm";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={classForm} />
          <Route path="/createForm" component={classForm} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider> ,
  document.querySelector("#root")
);
