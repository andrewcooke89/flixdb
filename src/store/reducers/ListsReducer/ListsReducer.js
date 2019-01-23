import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    isPending: false,
    error: null,
    favMoviesList: {results: []},
    favTvList: {results: []},
    watchListTv: {results: []},
    watchListMovies: {results: []},
    listType: ""
};

const ListsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_LIST_TYPE:
            return {
                ...state,
                listType: action.payload
            };
        default: return state;
    }
};

export default ListsReducer;