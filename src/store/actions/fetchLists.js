import * as actionTypes from './actionTypes';
import apiKey from '../../assets/apikey';


export const fetchFavouriteMovies = (session) => dispatch => {
    dispatch({ type: actionTypes.FETCH_FAVOURITEMOVIES_START });
    fetch(`https://api.themoviedb.org/3/account/{account_id}/favorite/movies?${apiKey}&session_id=${session}&language=en-US&sort_by=created_at.asc&page=1`)
    .then(res => res.json())
    .then( data => dispatch({ type: actionTypes.FETCH_FAVOURITEMOVIES_SUCCESS, payload: data}))
    .catch(err => dispatch({ type: actionTypes.FETCH_FAVOURITEMOVIES_FAIL, payload: err}))
}

export const fetchFavouriteTv = (session) => dispatch => {
    dispatch({ type: actionTypes.FETCH_FAVOURITETV_START });
    fetch(`https://api.themoviedb.org/3/account/{account_id}/favorite/tv?${apiKey}&session_id=${session}&language=en-US&sort_by=created_at.asc&page=1`)
    .then(res => res.json())
    .then( data => dispatch({ type: actionTypes.FETCH_FAVOURITETV_SUCCESS, payload: data}))
    .catch(err => dispatch({ type: actionTypes.FETCH_FAVOURITETV_FAIL, payload: err}))
}

export const fetchWatchListMovies = (session) => dispatch => {
    dispatch({ type: actionTypes.FETCH_WATCHLIST_MOVIES_START });
    fetch(`https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?${apiKey}&session_id=${session}&language=en-US&sort_by=created_at.asc&page=1`)
    .then(res => res.json())
    .then( data => dispatch({ type: actionTypes.FETCH_WATCHLIST_MOVIES_SUCCESS, payload: data}))
    .catch(err => dispatch({ type: actionTypes.FETCH_WATCHLIST_MOVIES_FAIL, payload: err}))
}

export const fetchWatchListTv = (session) => dispatch => {
    dispatch({ type: actionTypes.FETCH_WATCHLIST_TV_START });
    fetch(`https://api.themoviedb.org/3/account/{account_id}/watchlist/tv?${apiKey}&session_id=${session}&language=en-US&sort_by=created_at.asc&page=1`)
    .then(res => res.json())
    .then( data => dispatch({ type: actionTypes.FETCH_WATCHLIST_TV_SUCCESS, payload: data}))
    .catch(err => dispatch({ type: actionTypes.FETCH_WATCHLIST_TV_FAIL, payload: err}))
}