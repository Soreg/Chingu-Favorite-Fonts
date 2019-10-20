import {
    ADD_FONT,
    REMOVE_FONT,
    CLEAR_FONTS
} from './reducer';

export const addFont = font => {
    return {
        type: ADD_FONT,
        font
    };
}

export const removeFont = family => {
    return {
        type: REMOVE_FONT,
        family
    };
}

export const clearFonts = () => {
    return {
        type: CLEAR_FONTS
    };
}