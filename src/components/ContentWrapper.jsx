import React from "react";
import styled from 'styled-components';

export const Container = styled.div`

`;

const ContentWrapper = props => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default ContentWrapper;