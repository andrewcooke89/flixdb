import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    isPending: false,
    discoverResults: [],
    error: null
};

const discoverReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_DISCOVER_START:
            return {
                ...state,
                isPending: true
            };
        case actionTypes.FETCH_DISCOVER_SUCCESS:
            return {
                ...state,
                isPending: false,
                discoverResults: action.payload
            };
        case actionTypes.FETCH_DISCOVER_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            };
        default: return state;
    }
}

export default discoverReducer;