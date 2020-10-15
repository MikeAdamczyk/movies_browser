import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./common/Header";
import { MoviesPage } from "./features/movies/MoviesPage/index";
import { PeoplePage } from "./features/people/PeoplePage/index";
import { SingleMoviePage } from "./features/movies/SingleMoviePage/index";

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={MoviesPage} />
            <Route path="/movies" component={MoviesPage} />
            <Route path="/movies=id" component={SingleMoviePage} />
            <Route path="/people" component={PeoplePage} />
        </Switch>
    </Router>
);