import React, { Component } from "react";
import ContentWrapper from './components/ContentWrapper.jsx';
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
                        <ContentWrapper children={<Featured />} />
                    </Route>
                    <Route path="/articles">
                        <ContentWrapper children={<Articles />} />
                    </Route>
                    <Route path="/about">
                        <ContentWrapper children={<About />} />
                    </Route>
                    <Route path="/">
                        <ContentWrapper children={<Catalog />} />
                    </Route>
                </Switch>
            </BrowserRouter>            
        )
    }
}