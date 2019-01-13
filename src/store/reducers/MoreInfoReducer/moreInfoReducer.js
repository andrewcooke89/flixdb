import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    details: {},
    reviews: {},
    trailer: {},
    similar: {},
    isPending: false,
    error: null
}

const moreInfoReducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_MOREINFO_START:
            return {
                ...state,
                isPending: true
            }
        case actionTypes.FETCH_MOREINFO_SUCCESS:
            return {
                ...state,
                isPending: false,
                details: action.payload
            }
        case actionTypes.FETCH_MOREINFO_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case actionTypes.FETCH_SIMILAR_START:
            return {
                ...state,
                isPending: true
            }
        case actionTypes.FETCH_SIMILAR_SUCCESS:
            return {
                ...state,
                isPending: false,
                similar: action.payload
            }
        case actionTypes.FETCH_SIMILAR_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case actionTypes.FETCH_TRAILER_START:
            return {
                ...state,
                isPending: true
            }
        case actionTypes.FETCH_TRAILER_SUCCESS:
            return {
                ...state,
                isPending: false,
                trailer: action.payload
            }
        case actionTypes.FETCH_TRAILER_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case actionTypes.FETCH_GETREVIEWS_START:
            return {
                ...state,
                isPending: true
            }
        case actionTypes.FETCH_GETREVIEWS_SUCCESS:
            return {
                ...state,
                isPending: false,
                reviews: action.payload
            }
        case actionTypes.FETCH_GETREVIEWS_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        default: return state
    }
}

export default moreInfoReducer;