import * as actionTypes from './actionTypes';
import apiKey from '../../assets/apikey';

export const fetchTrendingMovies = () => (dispatch) => {
    dispatch({ type: actionTypes.FETCH_TRENDING_MOVIE_START });
    fetch(`https://api.themoviedb.org/3/trending/movie/week?${apiKey}`)
        .then(response => response.json())
        .then(data => 
            dispatch({ type: actionTypes.FETCH_TRENDING_MOVIE_SUCCESS, payload: data.results })
        )
        .catch(err => 
            dispatch({ type: actionTypes.FETCH_TRENDING_MOVIE_FAIL , payload: err})
        ) 
}

export const fetchTheatreMovies = () => (dispatch) => {
    dispatch({ type: actionTypes.FETCH_THEATRE_MOVIE_START });
    fetch(`https://api.themoviedb.org/3/movie/now_playing?${apiKey}&language=en-UK&page=1`)
    .then(response => response.json())
    .then(data =>
        dispatch({ type: actionTypes.FETCH_THEATRE_MOVIE_SUCCESS, payload: data.results })
    )
    .catch(err => 
        dispatch({ type: actionTypes.FETCH_THEATRE_MOVIE_FAIL, payload: err })
    )
}

export const fetchHighestRatedMovies = () => (dispatch) => {
    dispatch({ type: actionTypes.FETCH_HIGHESTRATED_MOVIE_START });
    fetch(`
    https://api.themoviedb.org/3/movie/top_rated?${apiKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data =>
        dispatch({ type: actionTypes.FETCH_HIGHESTRATED_MOVIE_SUCCESS, payload: data.results })
    )
    .catch(err => 
        dispatch({ type: actionTypes.FETCH_HIGHESTRATED_MOVIE_FAIL, payload: err })
    )
}

export const fetchUpcommingMovies = () => (dispatch) => {
    dispatch({ type: actionTypes.FETCH_UPCOMMING_MOVIE_START });
    fetch(`
    https://api.themoviedb.org/3/movie/upcoming?${apiKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data =>
        dispatch({ type: actionTypes.FETCH_UPCOMMING_MOVIE_SUCCESS, payload: data.results })
    )
    .catch(err => 
        dispatch({ type: actionTypes.FETCH_UPCOMMING_MOVIE_FAIL, payload: err })
    )
}

export const fetchPopulargMovies = () => (dispatch) => {
    dispatch({ type: actionTypes.FETCH_POPULAR_MOVIE_START });
    fetch(`
    https://api.themoviedb.org/3/movie/popular?${apiKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data =>
        dispatch({ type: actionTypes.FETCH_POPULAR_MOVIE_SUCCESS, payload: data.results })
    )
    .catch(err => 
        dispatch({ type: actionTypes.FETCH_POPULAR_MOVIE_FAIL, payload: err })
    )
}