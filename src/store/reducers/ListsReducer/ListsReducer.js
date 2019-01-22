import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    isPending: false,
    error: null,
    favMoviesList: {},
    favTvList: {},
    watchListTv: {},
    watchListMovies: {}
};

const ListsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_FAVOURITEMOVIES_START:
            return {
                ...state,
                isPending: true
            };
        case actionTypes.FETCH_FAVOURITEMOVIES_SUCCESS:
            return {
                ...state,
                isPending: false,
                favMoviesList: action.payload
            };
        case actionTypes.FETCH_FAVOURITEMOVIES_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            };
        case actionTypes.FETCH_FAVOURITETV_START:
            return {
                ...state,
                isPending: true
            };
        case actionTypes.FETCH_FAVOURITETV_SUCCESS:
            return {
                ...state,
                isPending: false,
                favTvList: action.payload
            };
        case actionTypes.FETCH_FAVOURITETV_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            };
        case actionTypes.FETCH_WATCHLIST_MOVIES_START:
            return {
                ...state,
                isPending: true
            };
        case actionTypes.FETCH_WATCHLIST_MOVIES_SUCCESS:
            return {
                ...state,
                isPending: false,
                watchListMovies: action.payload
            };
        case actionTypes.FETCH_WATCHLIST_MOVIES_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            };
        case actionTypes.FETCH_WATCHLIST_TV_START:
            return {
                ...state,
                isPending: true
            };
        case actionTypes.FETCH_WATCHLIST_TV_SUCCESS:
            return {
                ...state,
                isPending: false,
                watchListTv: action.payload
            };
        case actionTypes.FETCH_WATCHLIST_TV_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            };
        default: return state;
    }
};

export default ListsReducer;