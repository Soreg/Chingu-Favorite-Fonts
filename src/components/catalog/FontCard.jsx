import React from "react";
import { addFont } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { CardWrapper, CardInnerWrapper, CardTopContainer, CardHeadline, CardPreviewText, CardAddButton } from "./styles.js";

const FontCard = props => {
    const { font, text, fontSize } = props;

    const url = font.files.regular && font.files.regular.replace("http", "https");

    const dispatch = useDispatch();

    return (
        <CardWrapper>
            <CardInnerWrapper>
                <CardTopContainer>
                    <CardHeadline>{font.family}</CardHeadline>
                    <CardAddButton onClick={() => dispatch(addFont(font))}>+</CardAddButton>
                </CardTopContainer>

                <CardPreviewText
                    size={fontSize}
                    family={font.family}
                    url={url}
                    type={font.category}
                >
                    {text ? text : "She stared through the window at the stars"}
                </CardPreviewText>
            </CardInnerWrapper>
        </CardWrapper>
    )
}

export default FontCard;