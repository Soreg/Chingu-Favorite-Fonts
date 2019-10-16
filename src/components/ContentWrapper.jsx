import React from "react";
import Header from './shared/header/header.jsx';
import styled from 'styled-components';

export const Container = styled.div`
`;

const ContentWrapper = props => {
    return (
        <Container>
            <Header />
            {props.children}
        </Container>
    )
}

export default ContentWrapper;