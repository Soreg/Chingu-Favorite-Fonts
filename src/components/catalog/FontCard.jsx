import React, { Component } from "react";
import { CardWrapper, CardInnerWrapper, CardTopContainer, CardHeadline, CardPreviewText } from "./styles.js";

const FontCard = props => {
    const { font, text, fontSize } = props;

    return (
        <CardWrapper>
            <CardInnerWrapper>
                <CardTopContainer>
                    <CardHeadline>{font.family}</CardHeadline>
                </CardTopContainer>

                <CardPreviewText
                    size={fontSize}
                    family={font.family}
                    url={font.files.regular}
                    type={font.category}
                >
                    {text ? text : "She stared through the window at the stars"}
                </CardPreviewText>
            </CardInnerWrapper>
        </CardWrapper>
    )
}

export default FontCard;