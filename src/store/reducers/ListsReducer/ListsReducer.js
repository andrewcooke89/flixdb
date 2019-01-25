import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    isPending: false,
    error: null,
    listType: ""
};

const ListsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_LIST_TYPE:
            return {
                ...state,
                listType: action.payload
            };
        case actionTypes.ADD_OR_REMOVE_FROM_LIST_START:
            return {
                ...state,
                isPending: true
            };
        case actionTypes.ADD_OR_REMOVE_FROM_LIST_SUCCESS:
            return {
                ...state,
                isPending: false
            };
        case actionTypes.ADD_OR_REMOVE_FROM_LIST_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.paylaod
            }
        default: return state;
    }
};

export default ListsReducer;