import {
    TOGGLE_LIGHTMODE
} from './reducer';

export const setLightmode = (action) => {
    return {
        type: TOGGLE_LIGHTMODE,
        lightmode: action

    };
}