import React, { Component } from "react";
import Catalog from './components/catalog/catalog.jsx';
import Featured from './components/featured/featured.jsx';
import Articles from './components/articles/articles.jsx';
import About from './components/about/about.jsx';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/featured">
                        <Featured />
                    </Route>
                    <Route path="/articles">
                        <Articles />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Catalog />
                    </Route>
                </Switch>
            </BrowserRouter>            
        )
    }
}