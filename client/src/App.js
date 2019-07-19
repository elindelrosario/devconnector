import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import { Provider } from "react-redux";
import store from "./store";

import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

import "./App.css";

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.getItem("token"));
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
