import React from "react";
import Header from './shared/header/header.jsx';
import Footer from './shared/footer/footer.jsx';
import FontContainer from './shared/fontContainer/FontContainer.jsx';
import styled from 'styled-components';
import { getPageSize } from '../frontend-config';

export const Container = styled.div`
`;

export const PageWrapper = styled.div`
    max-width: ${getPageSize('maxWidth')};
    margin: 0 auto;
    padding: 0 80px;
`;

const ContentWrapper = props => {
    return (
        <Container>
            <Header />
            <PageWrapper>
                {props.children}
            </PageWrapper>
            <FontContainer />
            <Footer />
        </Container>
    )
}

export default ContentWrapper;