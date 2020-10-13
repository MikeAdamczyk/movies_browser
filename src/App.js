import React from "react";
import { Header } from "./common/components/Header";
import { MoviesPage } from "./features/movies/MoviesPage/index";
import { PeoplePage } from "./features/people/PeoplePage/index"
import { HashRouter as Router, Switch, Route } from "react-router-dom";

export default () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={MoviesPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/people" component={PeoplePage} />
      </Switch>
    </Router>
  </>
);