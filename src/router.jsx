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
            primary: '#F95759',
            header: {
                bg: '#FFF',
                fg: '#666666',
            },
            menu: {
                hamburger: '#666666',
                bg: '#FFF',
                bgTitle: '#EDEDED',
            },
            footer: {
                bg: '#EDEDED',
                fg: '#666666',
            },
            page: {
                bg: '#FFF',
                fg: '#000'
            },
            fontNavbar: {
                bg: '#FFF',
                fg: '#666',
                fgSelect: '#000',
                border: '#CCC',
                resetIcon: '#666'
            },

            lightgrey: '#EDEDED',
            grey: '#CCC',
            darkgrey: '#666',
            dark: '#262626',
            orange: '#eb6e0e'
        };

        const darkTheme = {
            primary: '#B53F41',
            header: {
                bg: '#272727',
                fg: '#DEDEDE',
            },
            menu: {
                hamburger: '#DEDEDE',
                bg: '#272727',
                bgTitle: '#383838',
            },
            footer: {
                bg: '#272727',
                fg: '#DEDEDE',
            },
            page: {
                bg: '#1D1D1D',
                fg: '#F5F5F5'
            },
            fontNavbar: {
                bg: '#333',
                fg: '#EDEDED',
                fgSelect: '#EDEDED',
                border: '#797979',
                resetIcon: '#EDEDED'
            },
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