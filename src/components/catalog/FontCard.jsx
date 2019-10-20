import React from "react";
import { addFont, removeFont } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { CardWrapper, CardInnerWrapper, CardTopContainer, CardHeadline, CardPreviewText, CardAddButton } from "./styles.js";

const FontCard = props => {
    const { font, text, fontSize } = props;

    const dispatch = useDispatch();
    const selectedFonts = useSelector(state => state.selectedFonts);

    const url = font.files.regular && font.files.regular.replace("http", "https");
    const isSelected = selectedFonts.filter(selected => selected.family === font.family).length > 0;


    function handleAddCard (font, isSelected) {
        if (!isSelected) {
            dispatch(addFont(font))
        } else {
            dispatch(removeFont(font.family))
        }
    }

    return (
        <CardWrapper>
            <CardInnerWrapper>
                <CardTopContainer>
                    <CardHeadline>{font.family}</CardHeadline>
                    <CardAddButton onClick={() => handleAddCard(font, isSelected)}>{isSelected ? '-' : '+'}</CardAddButton>
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