import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    trendingResults: [],
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
        default:
            return state
    }
}


export default MoviesReducer;