
import { getInitialViewState } from './UIManagerReducerHelper.js'

const appReducer = (state = getInitialViewState(), action) => {
    switch (action.type) {
        case 'NEW_GAME':
            return getInitialViewState();
        case 'SCENE_TRANSITION':
            return { ...state, scene: action.scene }
        default:
            return state
    }
};

export default appReducer;