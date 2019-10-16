import React from "react";
import Header from './shared/header/header.jsx';
import styled from 'styled-components';
import { getPageSize } from '../frontend-config';

export const Container = styled.div`
`;

export const PageWrapper = styled.div`
    max-width: ${getPageSize('maxWidth')};
    margin: 0 auto;
`;

const ContentWrapper = props => {
    return (
        <Container>
            <Header />
            <PageWrapper>
                {props.children}
            </PageWrapper>
        </Container>
    )
}

export default ContentWrapper;