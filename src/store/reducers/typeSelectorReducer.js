import * as actionTypes from '../actions/actionTypes';

const initialState = {
    entertainmentType: 'movies'
}

const typeSelectorReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_TO_MOVIES:
            return {
                ...state,
                entertainmentType: 'movies'
            }
        case actionTypes.CHANGE_TO_TV:
            return {
                ...state,
                entertainmentType: 'tv'
            }
        default: return state
    }
}

export default typeSelectorReducer;