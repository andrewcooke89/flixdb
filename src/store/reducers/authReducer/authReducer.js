import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    isAuthenticated: false,
    authenticationType: null,
    requestToken: "",
    isPending: false,
    error: null,
    guestSession: {},
    sessionId: {}
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_REQUESTTOKEN_START:
            return {
                ...state,
                isPending: true
            };
        case actionTypes.FETCH_REQUESTTOKEN_SUCCESS:
            return {
                ...state,
                isPending: false,
                requestToken: action.payload
            }
        case actionTypes.FETCH_REQUESTTOKEN_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case actionTypes.FETCH_GUEST_SESSION_START:
            return {
                ...state,
                isPending: true
            }
        case actionTypes.FETCH_GUEST_SESSION_SUCCESS:
            return {
                ...state,
                isPending: false,
                guestSession: action.payload,
                isAuthenticated: true,
                authenticationType: "GUEST"
            }
        case actionTypes.FETCH_GUEST_SESSION_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        case actionTypes.FETCH_GET_SESSION_ID_START:
            return {
                ...state,
                isPending: true
            }
        case actionTypes.FETCH_GET_SESSION_ID_SUCCESS:
            return {
                ...state,
                isPending: false,
                sessionId: action.payload
            }
        case actionTypes.FETCH_GET_SESSION_ID_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
        default: return state;
    } 
};

export default authReducer;