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
    outline: 0;
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

// Cards list
export const CardsList = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

// Card
export const CardWrapper = styled.div`
    box-sizing: border-box;
    width: 25%;
    padding: 0 25px;
    margin-bottom: 30px;
`;

export const CardInnerWrapper = styled.div`
    border-top: 1px solid #000;
`;

export const CardTopContainer = styled.div`
    padding: 8px 0;
    margin-bottom: 20px;
`;

export const CardHeadline = styled.div`
    font-weight: bold;
    font-size: 14px;
`;

export const CardPreviewText = styled.p`
    font-size: 32px;
`;