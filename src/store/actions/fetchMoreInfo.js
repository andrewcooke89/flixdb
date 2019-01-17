import * as actionTypes from './actionTypes';


export const fetchMoreInfo = (url) => (dispatch) => {
    dispatch({ type: actionTypes.FETCH_MOREINFO_START });
    fetch(`${url}`)
        .then(response => response.json())
        .then(data => 
            dispatch({ type: actionTypes.FETCH_MOREINFO_SUCCESS, payload: data })
        )
        .catch(err => 
            dispatch({ type: actionTypes.FETCH_MOREINFO_FAIL , payload: err})
        ) 
}

export const fetchTrailer = (url) => (dispatch) => {
    dispatch({ type: actionTypes.FETCH_TRAILER_START });
    fetch(`${url}`)
        .then(response => response.json())
        .then(data => 
            dispatch({ type: actionTypes.FETCH_TRAILER_SUCCESS, payload: data.results })
        )
        .catch(err => 
            dispatch({ type: actionTypes.FETCH_TRAILER_FAIL , payload: err})
        ) 
}

export const fetchReviews = (url) => (dispatch) => {
    dispatch({ type: actionTypes.FETCH_GETREVIEWS_START });
    fetch(`${url}`)
        .then(response => response.json())
        .then(data => 
            dispatch({ type: actionTypes.FETCH_GETREVIEWS_SUCCESS, payload: data.results })
        )
        .catch(err => 
            dispatch({ type: actionTypes.FETCH_GETREVIEWS_FAIL , payload: err})
        ) 
}

export const fetchSimilar = (url) => (dispatch) => {
    dispatch({ type: actionTypes.FETCH_SIMILAR_START });
    fetch(`${url}`)
        .then(response => response.json())
        .then(data => 
            dispatch({ type: actionTypes.FETCH_SIMILAR_SUCCESS, payload: data.results })
        )
        .catch(err => 
            dispatch({ type: actionTypes.FETCH_SIMILAR_FAIL , payload: err})
        ) 
}