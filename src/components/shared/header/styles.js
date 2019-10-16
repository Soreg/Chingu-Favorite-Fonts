import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
`;

export const Logo = styled.div`
    span {
        margin-right: 3px;
    }
`;

export const LinksWrapper = styled.div`
    text-transform: uppercase;
    display: flex;
    align-items: center;
`;

export const NavigationLink = styled(Link)`
    margin-right: 25px;
    text-decoration: none;

    &:last-of-type {
        margin-right: 0;
    }
`;