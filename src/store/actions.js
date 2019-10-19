import {
    ADD_FONT
} from './reducer';

export const addFont = font => {
    return {
        type: ADD_FONT,
        font

    };
}