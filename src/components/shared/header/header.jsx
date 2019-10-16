import React, { Component } from "react";
import { Wrapper, Logo, LinksWrapper, NavigationLink } from './styles';

export default class Header extends Component {
    render() {
        return (
            <Wrapper>
                <Logo>
                    <span>Favorite</span>
                    Fonts
                </Logo>
                <LinksWrapper>
                    <NavigationLink to="/">Catalog</NavigationLink>
                    <NavigationLink to="/featured">Featured</NavigationLink>
                    <NavigationLink to="/articles">Articles</NavigationLink>
                    <NavigationLink to="/about">About</NavigationLink>
                </LinksWrapper>
            </Wrapper>          
        )
    }
}