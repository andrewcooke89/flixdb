import * as actionTypes from './actionTypes';
import apiKey from '../../assets/apikey';

export const addOrRemoveFromList = (sessionId, accountId, listType, id, mediaType, boolSelector) => dispatch => {

    let bodyData;
        // assigns post request parameters based on list type
        if(listType === "favorite"){
            bodyData = JSON.stringify({
                "media_type": mediaType,
                "media_id": id,
                "favorite": boolSelector
              });
        } else if (listType === "watchlist") {
            bodyData = JSON.stringify({
                "media_type": mediaType,
                "media_id": id,
                "watchlist": boolSelector
              });
        }
    dispatch({type: actionTypes.ADD_OR_REMOVE_FROM_LIST_START})
    fetch(`https://api.themoviedb.org/3/account/${accountId}/${listType}?session_id=${sessionId}&${apiKey}`,{
        method: 'POST',
        body: bodyData,
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .then(dispatch({type: actionTypes.ADD_OR_REMOVE_FROM_LIST_SUCCESS}))
    .catch(err => dispatch({type: actionTypes.ADD_OR_REMOVE_FROM_LIST_FAIL, payload: err}))
}