import React from "react";
import { useSelector } from 'react-redux';
import { Wrapper, TopContainer, InnerWrapper } from "./styles.js";

const FontContainer = props => {
    const selectedFonts = useSelector(state => state.selectedFonts);
    const fontsLength = selectedFonts.length;

    const status = fontsLength > 0 ? 'active' : ''

    return (
        <Wrapper status={status}>
            <TopContainer>
                <span>{fontsLength}</span>
                Families Selected
            </TopContainer>
            <InnerWrapper>
                
            </InnerWrapper>
        </Wrapper>
    )
}

export default FontContainer;