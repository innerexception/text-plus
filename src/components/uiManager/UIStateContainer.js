import { connect } from 'react-redux'
import { parseInput } from '../../actions/Actions'
import { getInitialViewState } from './UIManagerReducerHelper.js';
import UIManager from './UIManager.jsx'

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch) => {
    return {
        onParseInput: (userInput, scene) => {
            dispatch(parseInput(userInput, scene));
        }
    }
};


const UIStateContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UIManager);

export default UIStateContainer;