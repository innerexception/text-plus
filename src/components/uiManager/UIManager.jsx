import React from 'react';
import './UIManager.css';
import AppStyles from '../../AppStyles'

export default class UIManager extends React.Component {

    parseInput = () => {
        this.props.onParseInput(this.state.currentInput, this.props.scene)
        this.setState({currentInput:''})
    }

    render(){
        return (
            <div style={styles.frame}>
                <div style={styles.topPanel}>
                    {Object.keys(this.props.stats).map((key) => 
                        <div>
                            <div>{key}</div>
                            <div>|{new Array(Math.round(this.props.stats[key]/5)).fill().map(()=>'=')}{new Array(Math.round((100-this.props.stats[key])/5)).fill().map(()=><span>&nbsp;</span>)}|</div>
                        </div>
                    )}
                </div>
                <div style={styles.centerPanel}>
                    {this.props.scene.paragraphs.map((p) => <p>{p}</p>)}
                    <div style={{display:'flex', alignItems:'center'}}>
                        <div onClick={this.parseInput}>>></div>
                        <input type='text' 
                            style={{background:'transparent', color:'green', border:'none'}}
                            onKeyPress={(e)=>e.key==='Enter' && this.parseInput()} 
                            onChange={(e)=>this.setState({currentInput: e.currentTarget.value})}/>
                    </div>
                </div>
            </div>
        )
    }
}


const styles = {
    topPanel: {
        ...AppStyles.rowSpcCtr,
        width:'100%',
        background:'black'
    },
    centerPanel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    frame: {
        background: 'black',
        color: 'green',
        height: '100%',
        padding:'1em'
    }
}