import { connect } from 'react-redux'
import { newGame, spaceMouseOver, spaceClick, passClicked } from './UIManagerActions.js'
import { getInitialViewState } from './UIManagerReducerHelper.js';
import UIManager from './UIManager.jsx'

const mapStateToProps = (state) => {
    return {
        viewState: state.viewState ? state.viewState : getInitialViewState()
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNewGameClick: () => {
            dispatch(newGame());
        },
        onSpaceMouseOver: (space) => {
            dispatch(spaceMouseOver(space));
        },
        onSpaceClick: (space) => {
            dispatch(spaceClick(space));
        },
        onPassClicked: () => {
            dispatch(passClicked());
        }
    }
};


const UIStateContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UIManager);

export default UIStateContainer;