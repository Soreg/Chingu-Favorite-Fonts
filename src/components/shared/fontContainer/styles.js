import styled from 'styled-components';
import { breakpoint } from '../../../frontend-config';

export const Wrapper = styled.div`
    color: ${props => props.theme.fontContainer.fg};
    position: fixed;
    width: 300px;
    z-index: 20;
    bottom: 0;
    right: 50%;
    ${props => {
        switch(props.status) {
            case 'active':
                return 'transform: translate(50%, calc(100% - 80px));'
            case 'open':
                return 'transform: translate(50%, calc(0% - 40px));'
            default: 
            return 'transform: translate(50%, calc(100% - 40px));'
        }
    }}
    transition: all ease .3s;

    @media (min-width: ${breakpoint('sm')}) {
        width: 400px;
    }

    @media (min-width: ${breakpoint('md')}) {
        width: 500px;
    }

    @media (min-width: ${breakpoint('lg')}) {
        right: 380px;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    z-index: 10;
    opacity: ${props => props.active ? '0.3' : '0'}
    visibility: ${props => props.active ? 'visible' : 'hidden'}
    transition: all ease .3s;
`;

export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 40px;
    background: ${props => props.theme.fontContainer.bgHeader};
    color: #fff;
    font-size: 15px;
    cursor: pointer;

    span {
        color: ${props => props.theme.orange};
        margin-right: 5px;
        font-weight: bold;
    }
`;

export const InnerWrapper = styled.div`
    padding: 20px 20px 40px;
    box-sizing: border-box;
    background: ${props => props.theme.fontContainer.bg};
    width: 100%;
    max-height: calc(100vh - 180px);
    overflow-y: auto;
`;

export const SelectionContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const ClearAllButton = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5px;
    cursor: pointer;
    color: ${props => props.theme.primary};
    font-size: 14px;
    padding: 10px 8px;
    transition: all ease .3s;
    font-weight: bold;

    &:hover {
        background: ${props => props.theme.lightgrey};
    }
`;

export const LinkButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
`;

export const LinkButton = styled.div`
    font-size: 13px;
    color: ${props => props.theme.primary};
    font-weight: bold;
    text-transform: uppercase;
    opacity: ${props => props.active ? '1' : '0.7'};
    margin-right: 15px;
    cursor: pointer;

    &:last-of-type {
        margin: 0;
    }
`;

export const InnerHeadline = styled.div`
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.theme.fontContainer.fgHeadline};
    ${props => !props.noMargin && `margin-bottom: 10px`};
`;

export const InnerDescription = styled.div`
    font-size: 15px;
`;

export const CodeContainer = styled.div`
    box-sizing: border-box;
    margin-top: 15px;
    padding: 10px;
    background: ${props => props.theme.fontContainer.bgSnippet};
    word-break: break-all;
    font-size: 14px;

    span {
        font-weight: bold;
    }
`;

export const CodeSnippetLine = styled.div`
    margin-top: 6px;
`;

export const Divider = styled.div`
    width: 100%;
    height: 2px;
    background: ${props => props.theme.lightgrey};
    margin: 20px auto;
`;