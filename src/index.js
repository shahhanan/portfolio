import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import {
  faHome,
  faUser,
  faCode,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab, faHome, faUser, faCode, faEnvelope);
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import configureStore from "./store";
import ErrorBoundary from "./utils/ErrorBoundary";
// Containers
import Approuter from "./containers/Approuter";
/* import Page404 from "./components/Page404/Page404";
 */const store = configureStore();
const history = createBrowserHistory();
ReactDOM.render(
  <Provider store={store} key="provider">
    <ErrorBoundary>
      <HashRouter history={history}>
        <Switch>
          {/* <Route exact path="/500" name="Page 500" component={Page500}/> */}
          {/* <Route path="/404" name="Page404" component={Page404} />
          <Route exact path="" name="Home2" component={Approuter} />  */}
          <Route path="/" name="Home" component={Approuter} />
          </Switch>
      </HashRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
