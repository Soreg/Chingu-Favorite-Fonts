import styled from 'styled-components';
import { getColor } from '../../frontend-config';

// Navbar
export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${getColor('grey')};
    border-radius: 20px;
    margin: 20px auto;
    padding: 0 30px;
`;

export const NavSearchInput = styled.input`
    width: 25%;
    font-size: 18px;
    border: none;
    outline: 0;
    padding: 10px 0;
    border-right: 1px solid ${getColor('grey')};
`;

export const NavSampleTextInput = styled(NavSearchInput)`
    padding-left: 15px;
`;

export const NavSelect = styled.select`
    align-self: stretch;
    border: none;
    padding-left: 10px;
`;

export const NavReset = styled.div`
    display: flex;
    align-self: stretch;
    flex: 1;
    justify-content: flex-end;
    padding-left: 10px;
    margin-left: 10px;
    border-left: 1px solid ${getColor('grey')};

    svg {
        cursor: pointer;
        fill: ${getColor('darkgrey')};
    }
`;

// Cards