export const initialState = {
    lightmode: true
};
export const TOGGLE_LIGHTMODE = 'TOGGLE_LIGHTMODE';

export const actions = {};

actions[TOGGLE_LIGHTMODE] = state => ({
    ...state,
    lightmode: !state.lightmode
});

export default function reducer(state = initialState, action) {
    const handler = actions[action.type];
    if (handler) {
        return handler(state, action);
    }
    return state;
}