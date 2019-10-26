  
export const initialState = {
    selectedFonts: JSON.parse(localStorage.getItem('favoriteFonts-fonts')) || [],
    theme: 'light'
};

export const ADD_FONT = 'ADD_FONT';
export const REMOVE_FONT = 'REMOVE_FONT';
export const CLEAR_FONTS = 'CLEAR_FONTS';
export const CHANGE_THEME = 'CHANGE_THEME';

export const actions = {};

actions[ADD_FONT] = (state, action) => ({
    ...state,
    selectedFonts: [...state.selectedFonts, action.font]
});

actions[REMOVE_FONT] = (state, action) => ({
    ...state,
    selectedFonts: state.selectedFonts.filter(font => font.family !== action.family)
});

actions[CLEAR_FONTS] = state => ({
    ...state,
    selectedFonts: []
});

actions[CHANGE_THEME] = (state, action) => ({
    ...state,
    theme: action.theme
});

export default function reducer(state = initialState, action) {
    const handler = actions[action.type];
    if (handler) {
        return handler(state, action);
    }
    return state;
}