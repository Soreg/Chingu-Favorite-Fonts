import {
    ADD_FONT,
    REMOVE_FONT
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