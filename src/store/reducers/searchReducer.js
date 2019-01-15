import * as actionTypes from '../actions/actionTypes';

const initialState = {
    searchValue: ''
}

const searchReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.CHANGE_SEARCH_FIELD:
            return {
                ...state,
                searchValue: action.payload
            }
        default: return state
    }
}

export default searchReducer;