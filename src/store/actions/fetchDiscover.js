import * as actionTypes from './actionTypes';

export const fetchDiscover = url => dispatch => {
    dispatch({ type: actionTypes.FETCH_DISCOVER_START });
    fetch(url)
    .then(resp => resp.json())
    .then(data => dispatch({ type: actionTypes.FETCH_DISCOVER_SUCCESS, payload: data.results}))
    .catch(error => dispatch({ type: actionTypes.FETCH_DISCOVER_FAIL, payload: error}))
};

