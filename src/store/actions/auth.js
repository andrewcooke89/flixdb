import * as actionTypes from './actionTypes';
import apiKey from '../../assets/apikey';

export const fetchRequestToken = () => dispatch => {
    dispatch ({ type: actionTypes.FETCH_REQUESTTOKEN_START});
    fetch(`https://api.themoviedb.org/3/authentication/token/new?${apiKey}`)
        .then(res => res.json())
        .then(data => dispatch({ type: actionTypes.FETCH_REQUESTTOKEN_SUCCESS, payload: data.request_token}))
        .catch(err => dispatch({ type: actionTypes.FETCH_REQUESTTOKEN_FAIL, payload: err}))
};

export const handleGuestLogin = () => dispatch => {
    dispatch({ type: actionTypes.FETCH_GUEST_SESSION_START})
    fetch(`https://api.themoviedb.org/3/authentication/guest_session/new?${apiKey}`)
        .then(res => res.json())
        .then(data => dispatch({ type: actionTypes.FETCH_GETREVIEWS_SUCCESS, payload: data}))
        .catch(err => dispatch({ type: actionTypes.FETCH_GUEST_SESSION_FAIL, payload: err}))
}