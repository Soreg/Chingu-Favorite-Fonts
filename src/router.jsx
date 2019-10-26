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
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

class Router extends Component {
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
        const { theme } = this.props;

        const lightTheme = {
            headerBg: '#FFF',
            headerFontColor: '#666666',
            hamburgerMenuColor: '#666666',
            mobileMenuBackground: '#FFF',
            mobileMenuTitleBackground: '#EDEDED',

            primary: '#F95759',
            lightgrey: '#EDEDED',
            grey: '#CCC',
            darkgrey: '#666666',
            dark: '#262626',
            orange: '#eb6e0e'
        };

        const darkTheme = {
            headerBg: '#272727',
            headerFontColor: '#DEDEDE',
            hamburgerMenuColor: '#DEDEDE',
            mobileMenuBackground: '#272727',
            mobileMenuTitleBackground: '#383838',
        };

        return (
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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
            </ThemeProvider>           
        )
    }
}

const mapStateToProps = state => ({
    theme: state.theme
});

export default connect(
    mapStateToProps,
    null
)(Router)