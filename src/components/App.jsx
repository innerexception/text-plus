import React from 'react';
import UIStateContainer from './uiManager/UIStateContainer.js';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
            <div className='othello-app'>
                <UIStateContainer store={this.props.store} />
            </div>
        );
    }
};

export default App