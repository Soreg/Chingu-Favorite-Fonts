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
            orange: '#eb6e0e',
            lightgrey: '#EDEDED',
            grey: '#CCC',
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
            fontContainer: {
                bg: '#FFF',
                fg: '#262626',
                fgHeadline: '#262626',
                bgHeader: '#262626',
                bgSnippet: '#EDEDED'
            },
            catalogPage: {
                bgCard: '#fff',
                topLine: '#000'
            }
        };

        const darkTheme = {
            primary: '#B53F41',
            orange: '#ffd5c5',
            lightgrey: '#424242',
            grey: '#656565',
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
                bg: '#424242',
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
            fontContainer: {
                bg: '#252525',
                fg: '#EDEDED',
                fgHeadline: '#EDEDED',
                bgHeader: '#8E3939',
                bgSnippet: '#483131'
            },
            catalogPage: {
                bgCard: '#232323',
                topLine: '#8E3939'
            }
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