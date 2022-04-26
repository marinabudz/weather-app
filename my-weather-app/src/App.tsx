
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./common/Routes";
import store from "./redux/store";
import CountriesPage from "./pages/CountriesPage/Countries.tsx";
import "./App.module.scss";


const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path={Routes.HOME} component={CountriesPage} exact />
      </Switch>
    </Router>
  </Provider>
);

export default App;
