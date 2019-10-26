import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { getColor, breakpoint } from '../../../frontend-config';

// Header
export const Wrapper = styled.div`
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid ${getColor('grey')};
    color: ${getColor('darkgrey')};
    opacity: 1;
`;

export const InnerWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 60px;
    margin: 0 auto;

    @media (min-width: ${breakpoint('md')}) {
        justify-content: space-between;
    }
`;

export const Logo = styled(NavLink)`
    font-size: 21px;
    color: ${getColor('darkgrey')};
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
    color: ${getColor('darkgrey')};

    &:last-of-type {
        margin-right: 0;
    }

    &.active {
        color: ${getColor('primary')};
    }
`;

// Mobile menu
export const MenuButton = styled.div`
    position: absolute;
    top: 50%;
    right: 50px;
    width: 20px;
    height: 2px;
    background: ${getColor('darkgrey')};;

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