import * as actionTypes from './actionTypes';
import apiKey from '../../assets/apikey';

export const fetchTrendingTv = () => (dispatch) => {
    dispatch({ type: actionTypes.FETCH_TRENDING_TV_START });
    fetch(`https://api.themoviedb.org/3/trending/tv/week?${apiKey}`)
        .then(response => response.json())
        .then(data => 
            dispatch({ type: actionTypes.FETCH_TRENDING_TV_SUCCESS, payload: data.results })
        )
        .catch(err => 
            dispatch({ type: actionTypes.FETCH_TRENDING_TV_FAIL , payload: err})
        ) 
}

export const fetchHighestRatedTv = () => (dispatch) => {
    dispatch({ type: actionTypes.FETCH_HIGHESTRATED_TV_START });
    fetch(`https://api.themoviedb.org/3/tv/top_rated?${apiKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => 
            dispatch({ type: actionTypes.FETCH_HIGHESTRATED_TV_SUCCESS, payload: data.results })
        )
        .catch(err => 
            dispatch({ type: actionTypes.FETCH_HIGHESTRATED_TV_FAIL , payload: err})
        ) 
}

export const fetchPopularTv = () => (dispatch) => {
    dispatch({ type: actionTypes.FETCH_POPULAR_TV_START });
    fetch(`https://api.themoviedb.org/3/tv/popular?${apiKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => 
            dispatch({ type: actionTypes.FETCH_POPULAR_TV_SUCCESS, payload: data.results })
        )
        .catch(err => 
            dispatch({ type: actionTypes.FETCH_POPULAR_TV_FAIL , payload: err})
        ) 
}

export const fetchAiringTodayTv = () => (dispatch) => {
    dispatch({ type: actionTypes.FETCH_AIRINGTODAY_TV_START });
    fetch(`https://api.themoviedb.org/3/tv/airing_today?${apiKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => 
            dispatch({ type: actionTypes.FETCH_AIRINGTODAY_TV_SUCCESS, payload: data.results })
        )
        .catch(err => 
            dispatch({ type: actionTypes.FETCH_AIRINGTODAY_TV_FAIL , payload: err})
        ) 
}

export const fetchOnAirTv = () => (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ONAIR_TV_START });
    fetch(`https://api.themoviedb.org/3/tv/on_the_air?${apiKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => 
            dispatch({ type: actionTypes.FETCH_ONAIR_TV_SUCCESS, payload: data.results })
        )
        .catch(err => 
            dispatch({ type: actionTypes.FETCH_ONAIR_TV_FAIL , payload: err})
        ) 
}