import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    trendingResults: [],
    onAirResults: [],
    highestRatedResults: [],
    airingTodayResults: [],
    popularResults: [],
    isPending: false,
    error: null
}

const TvReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_TRENDING_TV_START:
            return {
                ...state,
                isPending: true
            }
        case actionTypes.FETCH_TRENDING_TV_SUCCESS:
            return {
                ...state,
                isPending: false,
                trendingResults: action.payload
            }
        case actionTypes.FETCH_TRENDING_TV_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case actionTypes.FETCH_AIRINGTODAY_TV_START:
            return {
                ...state,
                isPending: true,
            }
        case actionTypes.FETCH_AIRINGTODAY_TV_SUCCESS:
            return {
                ...state,
                isPending: false,
                airingTodayResults: action.payload
            }
        case actionTypes.FETCH_AIRINGTODAY_TV_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case actionTypes.FETCH_HIGHESTRATED_TV_START:
            return {
                ...state,
                isPending: true,
            }
        case actionTypes.FETCH_HIGHESTRATED_TV_SUCCESS:
            return {
                ...state,
                isPending: false,
                highestRatedResults: action.payload
            }
        case actionTypes.FETCH_HIGHESTRATED_TV_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case actionTypes.FETCH_ONAIR_TV_START:
            return {
                ...state,
                isPending: true,
            }
        case actionTypes.FETCH_ONAIR_TV_SUCCESS:
            return {
                ...state,
                isPending: false,
               onAirResults: action.payload
            }
        case actionTypes.FETCH_ONAIR_TV_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case actionTypes.FETCH_POPULAR_TV_START:
            return {
                ...state,
                isPending: true,
            }
        case actionTypes.FETCH_POPULAR_TV_SUCCESS:
            return {
                ...state,
                isPending: false,
                popularResults: action.payload
            }
        case actionTypes.FETCH_POPULAR_TV_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        default:
            return state
    }
}
