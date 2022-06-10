import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ROUTES from "./common/Routes";
import store from "./redux/store";
import CountriesPage from "./pages/CountriesPage/Countries";
import FormPage from "../src/pages/FormPage/FormPage";
import Home from "../src/pages/Home/Home";
import "./App.module.scss";

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path={ROUTES.COUNTRIES} element={<CountriesPage/>} />
        <Route path={ROUTES.FORM} element={<FormPage/>} />
        <Route path={ROUTES.HOME} element={<Home/>}  />
      </Routes>
    </Router>
  </Provider>
);

export default App;
