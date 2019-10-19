import styled from 'styled-components';
import { getColor } from '../../frontend-config';

// Navbar
export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${getColor('grey')};
    border-radius: 20px;
    margin: 20px auto 40px;
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

export const NavModeWrapper = styled.div`
    display: flex;
    align-items: center;
    align-self: stretch;
    border-left: 1px solid ${getColor('grey')}
    padding-left: 10px;
`;

export const NavModeButton = styled.div`
    cursor: pointer;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${props => props.dark ? '#000' : '#fff'};
    border: 1px solid ${props => !props.dark && `${getColor('darkgrey')}`};
    margin-right: 5px;

    &:last-of-type {
        margin-right: 0;
    }
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
    align-self: stretch;
    box-sizing: border-box;
    width: 25%;
    padding: 0 25px;
    margin-bottom: 30px;
    min-height: 250px;
`;

export const CardInnerWrapper = styled.div`
    border-top: 1px solid #000;
`;

export const CardTopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    margin-bottom: 15px;
`;

export const CardHeadline = styled.div`
    font-weight: bold;
    font-size: 16px;
`;

export const CardAddButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: white;
    background: ${getColor('primary')}
    border: 1px solid ${getColor('primary')};
    cursor: pointer;
`;

export const CardPreviewText = styled.p`
    position: relative;
    font-size: ${props => props.size ? props.size : '32px'};
    font-family: ${props => props.family}, Arial, Sans-Serif;
    word-break: break-word;

    @font-face {
        font-family: ${props => props.family};
        src: url(${props => props.url});
    }
`;