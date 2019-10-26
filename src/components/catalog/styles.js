import styled from 'styled-components';
import { getColor, breakpoint } from '../../frontend-config';

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
    width: 30%;
    font-size: 18px;
    border: none;
    outline: 0;
    padding: 10px 0;
    border-right: 1px solid ${getColor('grey')};

    @media (min-width: ${breakpoint('lg')}) {
        width: 25%
    }
`;

export const NavSampleTextInput = styled(NavSearchInput)`
    padding-left: 15px;
`;

export const NavSelect = styled.select`
    align-self: stretch;
    border: none;
    outline: 0;
    padding-left: 10px;
    cursor: pointer;
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

export const BackToTop = styled.div`
    position: fixed;
    bottom: 15%;
    right: 3%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${getColor('primary')};
    cursor: pointer;
    opacity: ${props => props.show ? '.8' : '0'}
    visibility: ${props => props.show ? 'visible' : 'hidden'}
    transition: all ease .3s;

    &:before {
        content:"";
        border-style: solid;
        border-width: 8px 15px 8px 0;
        border-color: transparent #fff transparent transparent;
        position: absolute;
        transform: translate(-50%, -50%) rotate(90deg);
        left: 50%;
        top: 45%;
    }
`;

// Card
export const CardWrapper = styled.div`
    align-self: stretch;
    box-sizing: border-box;
    width: 100%;
    padding: 0 25px;
    margin-bottom: 30px;
    min-height: 250px;

    @media (min-width: ${breakpoint('md')}) {
        width: 50%
    }

    @media (min-width: ${breakpoint('lg')}) {
        width: 33.3%
    }

    @media (min-width: ${breakpoint('xl')}) {
        width: 25%
    }
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
    font-size: 24px;
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