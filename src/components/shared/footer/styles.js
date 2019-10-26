import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    z-index: 100;
    bottom: 0;
    background: ${props => props.theme.lightgrey};
    color: ${props => props.theme.darkgrey};
    height: 40px;
    line-height: 40px;
    width: 100vw;
    text-align: center;
`;