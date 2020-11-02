import React from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./common/Header";
import { MoviesPage } from "./features/movies/MoviesPage/index";
import { SinglePage } from "./common/SinglePage/index";
import { PeoplePage } from "./features/people/PeoplePage/index";

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/movies/:id" render={(props) => <SinglePage {...props} detailType={"movie"} listType={"people"} />} />
            <Route path="/people/:id" render={(props) => <SinglePage {...props} detailType={"people"} listType={"movie"} />} />
            <Route path="/movies" component={MoviesPage} />
            <Route path="/people" component={PeoplePage} />
            <Route path="/" render={() => (<Redirect to="/movies" />)} />
        </Switch>
    </Router>
);