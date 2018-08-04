import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

/// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
/// Reducer are here

const feelingReducer = (state = 0, action) => {
    console.log('feeling: ' + action.payload);
    if(action.type === 'FEELING'){
        return action.payload;
    }
    return state;
}

const understandingReducer = (state = 0 , action)=>{
    if (action.type === 'UNDERSTAND') {
        return action.payload;
    }
    return state;
}

const supportReducer = (state = 0 , action)=>{
    if (action.type === 'SET_SUPPORTED') {
        return action.payload;
    }
    return state;
}

const commentsReducer = (state = '', action)=>{
    if (action.type === 'Comment') {
        return action.payload
    }
    return state
}


/// This is my store
const storeInstance = createStore(
    combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentsReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
