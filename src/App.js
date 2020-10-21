import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./common/Header";
import { MoviesPage } from "./features/movies/MoviesPage/index";
import { SingleMoviePage } from "./features/movies/SingleMoviePage";
import { PeoplePage } from "./features/people/PeoplePage/index"

export default () => (
    <Router basename="/movies_browser">
        <Header />
        <Switch>
            <Route path="/" exact component={MoviesPage} />
            <Route path="/movies" component={MoviesPage} />
            <Route path="/movies=id" component={SingleMoviePage} />
            <Route path="/people" component={PeoplePage} />
            <Route path="/single" component={SingleMoviePage} />
        </Switch>
    </Router>
);