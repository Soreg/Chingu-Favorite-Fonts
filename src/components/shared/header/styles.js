import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { getColor } from '../../../frontend-config';


export const Wrapper = styled.div`
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid ${getColor('darkgrey')};
    color: ${getColor('darkgrey')};
`;

export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
    margin: 0 auto;
`;

export const Logo = styled.div`
    font-size: 21px;

    span {
        font-weight: bold;
        margin-right: 5px;
    }
`;

export const LinksWrapper = styled.div`
    text-transform: uppercase;
    display: flex;
    align-items: center;
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