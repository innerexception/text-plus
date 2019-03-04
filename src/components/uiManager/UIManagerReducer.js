import ReactDOM from 'react-dom';
import Constants from '../Constants.js'
import { getInitialViewState, getFlankedNeighborPositions, flipFlankedNeighbors, doesValidMoveExist } from './UIManagerReducerHelper.js'

const appReducer = (state = {}, action) => {
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