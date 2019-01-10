import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    trendingResults: [],
    theatreResults: [],
    highestRatedResults: [],
    upcommingResults: [],
    popularResults: [],
    isPending: false,
    error: null
}

const MoviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_TRENDING_MOVIE_START:
            return {
                ...state,
                isPending: true
            }
        case actionTypes.FETCH_TRENDING_MOVIE_SUCCESS:
            return {
                ...state,
                isPending: false,
                trendingResults: action.payload
            }
        case actionTypes.FETCH_TRENDING_MOVIE_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case actionTypes.FETCH_THEATRE_MOVIE_START:
            return {
                ...state,
                isPending: true,
            }
        case actionTypes.FETCH_THEATRE_MOVIE_SUCCESS:
            return {
                ...state,
                isPending: false,
                theatreResults: action.payload
            }
        case actionTypes.FETCH_THEATRE_MOVIE_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case actionTypes.FETCH_HIGHESTRATED_MOVIE_START:
            return {
                ...state,
                isPending: true,
            }
        case actionTypes.FETCH_HIGHESTRATED_MOVIE_SUCCESS:
            return {
                ...state,
                isPending: false,
                highestRatedResults: action.payload
            }
        case actionTypes.FETCH_HIGHESTRATED_MOVIE_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case actionTypes.FETCH_UPCOMMING_MOVIE_START:
            return {
                ...state,
                isPending: true,
            }
        case actionTypes.FETCH_UPCOMMING_MOVIE_SUCCESS:
            return {
                ...state,
                isPending: false,
                upcommingResults: action.payload
            }
        case actionTypes.FETCH_UPCOMMING_MOVIE_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case actionTypes.FETCH_POPULAR_MOVIE_START:
            return {
                ...state,
                isPending: true,
            }
        case actionTypes.FETCH_POPULAR_MOVIE_SUCCESS:
            return {
                ...state,
                isPending: false,
                popularResults: action.payload
            }
        case actionTypes.FETCH_POPULAR_MOVIE_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        default:
            return state
    }
}


export default MoviesReducer;