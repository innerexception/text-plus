import React from 'react';
import './UIManager.css';
import { getOthelloBoard, getIndicatorClassName } from './UIManagerHelper.js';
import { newGame } from './UIManagerActions.js';

class UIManager extends React.Component {
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.props.store.dispatch(newGame());
    };

    render(){
        return (
            <div className='ui-frame'>
                <div className='ui-top-bar'>
                    <div className='inline-div title'>Othello</div>
                    <div className='inline-div pass'>{this.props.viewState.winner ? 'Winner!' : this.props.viewState.legalMoveExists ? '' : 'Pass'}</div>
                    <div className='inline-div score'>
                        <div className='piece player-one'></div>
                        <div>{this.props.viewState.playerOneScore}</div>
                    </div>
                    <div className='inline-div score'>
                        <div className='piece player-two'></div>
                        <div>{this.props.viewState.playerTwoScore}</div>
                    </div>
                    <div className='inline-div new-game' title='Start a new game' onClick={this.props.onNewGameClick}></div>
                    <div className={getIndicatorClassName(this.props.viewState)} title='Current player turn' onClick={this.props.viewState.legalMoveExists ? null : this.props.onPassClicked}></div>
                </div>
                { getOthelloBoard(this.props.viewState, this.props.onSpaceMouseOver, this.props.onSpaceClick) }
            </div>
        )
    }
}

export default UIManager