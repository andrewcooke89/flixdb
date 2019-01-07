import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import thunkMiddleWare from 'redux-thunk'
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import MoviesReducer from './store/reducers/MovieReducers/getMoviesReducer';

const logger = createLogger()

const store = createStore(MoviesReducer, applyMiddleware(thunkMiddleWare, logger))

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
