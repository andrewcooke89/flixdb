import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import thunkMiddleWare from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import MoviesReducer from './store/reducers/MovieReducers/getMoviesReducer';
import TvReducer from './store/reducers/TvReducers/getTvReducer';
import typeSelectorReducer from './store/reducers/typeSelectorReducer';
import moreInfoReducer from './store/reducers/MoreInfoReducer/moreInfoReducer';
import searchReducer from './store/reducers/searchReducer';
import ScrollToTop from './hoc/ScrollToTop';
import discoverReducer from './store/reducers/DiscoverReducer/discoverReducer';

// const logger = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    movies: MoviesReducer,
    tv: TvReducer,
    typeSelector: typeSelectorReducer,
    moreInfo: moreInfoReducer,
    search: searchReducer,
    discover: discoverReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));

ReactDOM.render(<Provider store={store}><BrowserRouter><ScrollToTop><App /></ScrollToTop></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
