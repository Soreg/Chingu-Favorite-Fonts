import styled from 'styled-components';
import { getColor } from '../../../frontend-config';

export const Wrapper = styled.div`
    position: fixed;
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

export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
    width: 500px;
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
    height: 400px;
    background: grey;
    width: 100%;
`;