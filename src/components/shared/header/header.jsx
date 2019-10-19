import React, { Component } from "react";
import { Wrapper, Logo, LinksWrapper, NavigationLink, InnerWrapper } from './styles';

export default class Header extends Component {
    render() {
        return (
            <Wrapper>
                <InnerWrapper>
                    <Logo to="/">
                        <span>Favorite</span>
                        Fonts
                    </Logo>
                    <LinksWrapper>
                        <NavigationLink exact to="/">Catalog</NavigationLink>
                        <NavigationLink to="/featured">Featured</NavigationLink>
                        <NavigationLink to="/articles">Articles</NavigationLink>
                        <NavigationLink to="/about">About</NavigationLink>
                    </LinksWrapper>
                </InnerWrapper>
            </Wrapper>          
        )
    }
}