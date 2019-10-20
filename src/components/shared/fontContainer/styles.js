import styled from 'styled-components';
import { getColor } from '../../../frontend-config';

export const Wrapper = styled.div`
    position: fixed;
    width: 500px;
    z-index: 20;
    bottom: 0;
    right: 50px;
    ${props => {
        switch(props.status) {
            case 'active':
                return 'transform: translateY(calc(100% - 80px));'
            case 'open':
                return 'transform: translateY(calc(0% - 40px));'
            default: 
            return 'transform: translateY(calc(100% - 40px));'
        }
    }}
    transition: all ease .3s;
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
    background: ${getColor('dark')};
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    span {
        color: ${getColor('orange')};
        margin-right: 5px;
    }
`;

export const InnerWrapper = styled.div`
    padding: 20px 20px 40px;
    box-sizing: border-box;
    background: #fff;
    width: 100%;
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
    color: ${getColor('primary')};
    font-size: 14px;
    padding: 10px 8px;
    transition: all ease .3s;
    font-weight: bold;

    &:hover {
        background:${getColor('lightgrey')}
    }
`;

export const InnerHeadline = styled.div`
    font-size: 15px;
    font-weight: bold;
    color: ${getColor('dark')}
    ${props => !props.noMargin && `margin-bottom: 10px`};
`;

export const InnerDescription = styled.div`
    font-size: 15px;
    color: ${getColor('darkgrey')}
`;

export const CodeContainer = styled.div`
    box-sizing: border-box;
    margin-top: 15px;
    padding: 10px;
    background: ${getColor('lightgrey')};
    color: ${getColor('darkgrey')}
    word-break: break-all;
    font-size: 14px;

    span {
        font-weight: bold;
    }
`;