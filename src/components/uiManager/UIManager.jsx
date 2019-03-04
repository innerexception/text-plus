import React from 'react';
import './UIManager.css';
import { newSession } from '../../actions/Actions';
import AppStyles from '../../AppStyles'

export default class UIManager extends React.Component {
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.props.store.dispatch(newSession());
    };

    parseInput = () => {
        this.props.onParseInput(this.state.currentInput)
        this.setState({currentInput:''})
    }

    render(){
        return (
            <div className='ui-frame'>
                <div style={styles.rowPanel}>
                    {Object.keys(viewState.stats).map((key) => 
                        <div>
                            <div>{key}</div>
                            <div>{viewState.stats[key]}</div>
                        </div>
                    )}
                </div>
                <div style={styles.rowPanel}>
                    {viewState.scene.paragraphs.map((p) => <p>{p}</p>)}
                    <input type='text' 
                           onKeyPress={(e)=>e.key==='Enter' && this.parseInput()} 
                           onChange={(e)=>this.setState({currentInput: e.currentTarget.value})}/>
                </div>
            </div>
        )
    }
}


const styles = {
    rowPanel: {
        ...AppStyles.rowSpcCtr,
        height: '100%'
    }
}