import React, { Component } from "react";
import { CardWrapper, CardInnerWrapper, CardTopContainer, CardHeadline, CardPreviewText } from "./styles.js";

const FontCard = props => {
    const { font, text } = props;
    return (
        <CardWrapper>
            <CardInnerWrapper>
                <CardTopContainer>
                    <CardHeadline>{font.family}</CardHeadline>
                </CardTopContainer>

                <CardPreviewText>{text}</CardPreviewText>
            </CardInnerWrapper>
        </CardWrapper>
    )
}

export default FontCard;