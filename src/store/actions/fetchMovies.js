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