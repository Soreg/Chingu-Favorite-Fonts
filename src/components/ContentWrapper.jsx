import React from "react";
import Header from './shared/header/header.jsx';
import Footer from './shared/footer/footer.jsx';
import FontContainer from './shared/fontContainer/FontContainer.jsx';
import styled from 'styled-components';
import { breakpoint } from '../frontend-config';

export const Container = styled.div`
`;

export const PageWrapper = styled.div`
    max-width: ${breakpoint('maxWidth')};
    margin: 0 auto;
    padding: 60px 55px 0;

    @media (min-width: ${breakpoint('md')}) {
        padding: 0 80px;
    }
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