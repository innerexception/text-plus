import React from 'react'
import thunkMiddleware from 'redux-thunk'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import appReducer from './src/components/uiManager/UIManagerReducer.js'
import App from './src/App.jsx'

let store = createStore(appReducer, applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
));

ReactDom.render(<App store={store} />, document.getElementById('appRoot'));