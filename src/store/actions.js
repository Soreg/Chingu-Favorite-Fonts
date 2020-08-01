import {
    ADD_FONT,
    REMOVE_FONT,
    CLEAR_FONTS,
    CHANGE_THEME
} from './reducer';

export const addFont = font => {
    let selectedStorage = JSON.parse(localStorage.getItem('favoriteFonts-fonts'));
    selectedStorage = selectedStorage ? [...selectedStorage, font] : [font];
    localStorage.setItem('favoriteFonts-fonts', JSON.stringify(selectedStorage));
    return {
        type: ADD_FONT,
        font
    };
}

export const removeFont = family => {
    let selectedStorage = JSON.parse(localStorage.getItem('favoriteFonts-fonts'));
    selectedStorage = selectedStorage.filter(font => font.family !== family);
    localStorage.setItem('favoriteFonts-fonts', JSON.stringify(selectedStorage));
    return {
        type: REMOVE_FONT,
        family
    };
}

export const clearFonts = () => {
    localStorage.setItem('favoriteFonts-fonts', null);
    return {
        type: CLEAR_FONTS
    };
}

export const changeTheme = theme => {
    return {
        type: CHANGE_THEME,
        theme
    };
}