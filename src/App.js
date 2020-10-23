import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./common/Header";
import { MoviesPage } from "./features/movies/MoviesPage/index";
import { SinglePage } from "./features/movies/SinglePage/index";
import { PeoplePage } from "./features/people/PeoplePage/index";

export default () => (
    <Router basename="/movies_browser">
        <Header />
        <Switch>
            <Route path="/" exact component={MoviesPage} />
            <Route path="/movies/:id" render={(props) => <SinglePage {...props}  detailType={"movie"} listType={"people"} />}/>
            <Route path="/people/:id" render={(props) => <SinglePage {...props}  detailType={"people"} listType={"movie"}/>}/>
            <Route path="/movies" component={MoviesPage} />
            <Route path="/people" component={PeoplePage} />
        </Switch>
    </Router>
);