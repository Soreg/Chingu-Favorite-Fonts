import styled from 'styled-components';
import { getColor } from '../../../frontend-config';

export const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    background: ${getColor('lightgrey')};
    color: ${getColor('darkgrey')};
    height: 40px;
    line-height: 40px;
    width: 100vw;
    text-align: center;
`;