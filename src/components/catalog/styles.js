import styled from 'styled-components';
import { breakpoint } from '../../frontend-config';

// Navbar
export const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px auto 40px;
    background: ${props => props.theme.fontNavbar.bg};
    padding: 10px;

    @media (min-width: ${breakpoint('md')}) {
        flex-direction: row;
        padding: 0 30px;
        border: 1px solid ${props => props.theme.fontNavbar.border};
        border-radius: 20px;
        align-items: center;
    }
`;

export const NavSearchInput = styled.input`
    width: 30%;
    font-size: 15px;
    outline: 0;
    border: 1px solid ${props => props.theme.fontNavbar.border};
    margin-bottom: 10px;
    border-radius: 3px;
    width: 100%;
    padding: 10px 15px;
    background: ${props => props.theme.fontNavbar.bg};
    color: ${props => props.theme.fontNavbar.fg};

    &::placeholder {
        color: inherit;
    }

    @media (min-width: ${breakpoint('md')}) {
        font-size: 18px;
        border: none;
        border-right: 1px solid ${props => props.theme.fontNavbar.border};
        border-radius: 0;
        padding: 10px 0;
        margin: 0;
        width: 35%;
    }

    @media (min-width: ${breakpoint('lg')}) {
        width: 25%
    }
`;

export const NavSampleTextInput = styled(NavSearchInput)`
    @media (min-width: ${breakpoint('md')}) {
        padding-left: 15px;
    }
`;

export const NavRightWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: stretch;
    flex: 1;
`;

export const NavSelect = styled.select`
    align-self: flex-start;
    outline: 0;
    padding: 5px 2px;
    cursor: pointer;
    background: ${props => props.theme.fontNavbar.bg};
    color: ${props => props.theme.fontNavbar.fgSelect};

    @media (min-width: ${breakpoint('md')}) {
        align-self: stretch;
        border: none;
        padding-left: 10px;
    }
`;

export const NavThemeWrapper = styled.div`
    display: flex;
    align-items: center;

    @media (min-width: ${breakpoint('md')}) {
        align-self: stretch;
        border-left: 1px solid ${props => props.theme.fontNavbar.border};
        padding-left: 10px;
    }
`;

export const NavThemeButton = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
    background: ${props => props.dark ? '#000' : '#fff'}
    border: 1px solid ${props => props.dark ? '#fff' : '#000'}

    &:last-of-type {
        margin-right: 0;
    }
`;

export const NavDisplayWrapper = styled.div`
    align-self: stretch;
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-left: 10px;
    border-left: 1px solid ${props => props.theme.fontNavbar.border};

    svg {
        cursor: pointer;
        fill: ${props => props.theme.fontNavbar.fgSelect};
    }
`;

export const NavReset = styled.div`
    display: flex;
    align-self: stretch;
    justify-content: flex-end;
    padding-left: 10px;
    margin-left: 10px;
    border-left: none;

    @media (min-width: ${breakpoint('md')}) {
        border-left: 1px solid ${props => props.theme.fontNavbar.border};
        flex: 1;
    }

    svg {
        cursor: pointer;
        fill: ${props => props.theme.fontNavbar.resetIcon};
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
    background: ${props => props.theme.primary};
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
    display: flex;
    align-self: stretch;
    box-sizing: border-box;
    width: 100%;
    background: ${props => props.theme.catalogPage.bgCard};
    margin-bottom: 20px;

    ${props => !props.fullWidth ? (
        `
        min-height: 250px;
        padding: 10px 25px 30px;

        @media (min-width: ${breakpoint('md')}) {
            margin: 5px;
            width: calc(50% - 10px);
        }
    
        @media (min-width: ${breakpoint('lg')}) {
            width: calc(33.3% - 10px);
        }
    
        @media (min-width: ${breakpoint('xl')}) {
            width: calc(25% - 10px);
        }
        `
    ) : (
        `
        min-height: 150px;
        padding: 10px 25px;
        `
    )}
`;

export const CardInnerWrapper = styled.div`
    border-top: 1px solid ${props => props.theme.catalogPage.topLine};
    flex: 1;
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
    background: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.primary};
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