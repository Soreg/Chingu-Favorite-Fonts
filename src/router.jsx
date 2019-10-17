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
    constructor(props) {
        super(props);

        this.state = {
            catalogFonts: null
        }
    }

    componentDidMount() {
        const catalogUrl = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyDLMyTQSwKsXcKV8l7VBnZS1DQcyZ985d0`

        fetch(catalogUrl)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    catalogFonts: result.items
                })
            })
    }

    render() {
        const { catalogFonts } = this.state;

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
                        <ContentWrapper children={<Catalog fonts={catalogFonts}  />} />
                    </Route>
                </Switch>
            </BrowserRouter>            
        )
    }
}