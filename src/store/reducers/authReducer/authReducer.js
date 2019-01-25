import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    authenticationType: null,
    requestToken: "",
    isPending: false,
    error: null,
    sessionId: {},
    loginStatus: "loggedOut",
    accountDetails: {}
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
        case actionTypes.CHANGE_LOGIN_STATUS:
            return {
                ...state,
                loginStatus: action.payload
            }
        case actionTypes.LOG_OUT:
            return {
                ...state,
                loginStatus: "loggedOut",
                sessionId: {}
            }
        case actionTypes.FETCH_ACCOUNT_DETAILS_START:
            return {
                ...state,
                isPending: true
            };
        case actionTypes.FETCH_ACCOUNT_DETAILS_SUCCESS:
            return {
                ...state,
                isPending: false,
                accountDetails: action.payload
            };
        case actionTypes.FETCH_ACCOUNT_DETAILS_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            };
        default: return state;
    } 
};

export default authReducer;