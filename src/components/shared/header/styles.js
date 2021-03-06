import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { breakpoint } from '../../../frontend-config';

// Header
export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: ${props => props.theme.header.bg};
    z-index: 40;
    width: 100%;
    height: 60px;
    border-top: 1px solid ${props => props.theme.grey};
    border-bottom: 1px solid ${props => props.theme.grey};
    color: ${props => props.theme.header.fg};

    @media (min-width: ${breakpoint('md')}) {
        position: relative;
        border-top: none;
    }
`;

export const InnerWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 60px;
    margin: 0 auto;
    height: 100%;

    @media (min-width: ${breakpoint('md')}) {
        justify-content: space-between;
    }
`;

export const Logo = styled(NavLink)`
    font-size: 21px;
    color: ${props => props.theme.header.fg};
    text-decoration: none;

    span {
        font-weight: bold;
        margin-right: 5px;
    }
`;

export const LinksWrapper = styled.div`
    display: none;

    @media (min-width: ${breakpoint('md')}) {
        display: block;
        text-transform: uppercase;
        display: flex;
        align-items: center;
    }
`;

export const NavigationLink = styled(NavLink)`
    margin-right: 25px;
    text-decoration: none;
    color: ${props => props.theme.header.fg};

    &:last-of-type {
        margin-right: 0;
    }

    &.active {
        color: ${props => props.theme.primary};
    }
`;

export const MenuButton = styled.div`
    position: absolute;
    top: 50%;
    right: 50px;
    width: 20px;
    height: 2px;
    background: ${props => props.theme.menu.hamburger};

    &:before, &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: inherit;
        background: inherit;
    }

    &:before {
        top: -6px;
    }

    &:after {
        top: 6px;
    }
`;

// Mobile menu
export const MenuOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000;
    z-index: 50;
    opacity: ${props => props.show ? '.3' : '0'}
    visibility: ${props => props.show ? 'visible' : 'hidden'}
    transition: all ease .5s;
`;

export const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: calc(100% - 80px);
    max-width: 450px;
    background: ${props => props.theme.menu.bg};
    z-index: 100;
    overflow-x: hidden;
    text-align: center;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: all ease .5s;
`;

export const MenuCloseIcon = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    transform: translate(-50%, -50%);

    &:before, &:after {
        content: "";
        position: absolute;
        height: 2px;
        width: 20px;
        background: ${props => props.theme.header.fg};
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }
`;

export const Section = styled.div`
    position: relative;
    padding: 20px 10px;
    color: ${props => props.theme.headerFontColor};
    border-bottom: 1px solid ${props => props.theme.header.fg};

    > a {
        color: inherit;
        text-decoration: none;
    }
`;

export const SectionHeadline = styled(Section)`
    font-weight: bold;
    background: ${props => props.theme.menu.bgTitle};
`;