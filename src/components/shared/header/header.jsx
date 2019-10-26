import React, { Component } from "react";
import { Wrapper, Logo, LinksWrapper, NavigationLink, InnerWrapper, MenuButton } from './styles';
import { breakpointsRaw } from '../../../frontend-config';
import MobileMenu from './MobileMenu.jsx';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mobile: false,
            mobileMenuOpen: false
        }

        this.onResize = this.onResize.bind(this);
        this.openMobileMenu = this.openMobileMenu.bind(this);
    }

    componentDidMount() {
        this.onResize();
        window.addEventListener("resize", this.onResize, true);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    onResize() {
        const { mobile } = this.state;
        const mobileBreakpoint = (breakpointsRaw('md'));
        const pageWidth = document.body.clientWidth;

        if(!mobile && pageWidth < mobileBreakpoint) {
            this.setState({
                mobile: true
            })
        } else if (mobile && pageWidth >= mobileBreakpoint) {
            this.setState({
                mobile: false
            })
        }
    }

    openMobileMenu() {
        this.setState({
            mobileMenuOpen: true
        })
    }

    render() {
        const { mobile, mobileMenuOpen } = this.state;

        return (
            <Wrapper>
                <InnerWrapper>
                    <Logo to="/">
                        <span>Favorite</span>
                        Fonts
                    </Logo>
                    {mobile ? (
                        <MenuButton onClick={this.openMobileMenu} />
                    ) : (
                        <LinksWrapper>
                            <NavigationLink exact to="/">Catalog</NavigationLink>
                            <NavigationLink to="/featured">Featured</NavigationLink>
                            <NavigationLink to="/articles">Articles</NavigationLink>
                            <NavigationLink to="/about">About</NavigationLink>
                        </LinksWrapper>
                    )}
                </InnerWrapper>
            </Wrapper>          
        )
    }
}