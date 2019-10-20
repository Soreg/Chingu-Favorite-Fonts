  
export const initialState = {
    selectedFonts: []
};

export const ADD_FONT = 'ADD_FONT';
export const REMOVE_FONT = 'REMOVE_FONT';

export const actions = {};

actions[ADD_FONT] = (state, action) => ({
    ...state,
    selectedFonts: [...state.selectedFonts, action.font]
});

actions[REMOVE_FONT] = (state, action) => ({
    ...state,
    selectedFonts: state.selectedFonts.filter(font => font.family !== action.family)
});

export default function reducer(state = initialState, action) {
    const handler = actions[action.type];
    if (handler) {
        return handler(state, action);
    }
    return state;
}