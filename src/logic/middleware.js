import actionTypes from './actions/actionTypes';
/* This code was adopted from RealWorld App */
/* This neccesitates that actions would have a 'payload'property which is a promise */
import {requestData, requestFailure, requestSuccess} from './actions/requests';

export const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    store.dispatch(requestData(action.type));
    action.payload.then(
      res => {
        store.dispatch({type: actionTypes.END_REQUEST});
        action.payload = getDataFromResult(res);
        store.dispatch(requestSuccess());
        store.dispatch(action);
      },
      error => {
        store.dispatch({type: actionTypes.END_REQUEST});
        console.log('ERROR', error);
        action.error = error.response || true;
        action.payload = {};
        store.dispatch(requestFailure(error));
        store.dispatch(action);
      }
    );

    return;
  }

  next(action);
};
function isPromise(v) {
  return v && typeof v.then === 'function';
}

/* Utility functions */

const getPayloadFromData = res => {
  let result = {};
  const data = res.data;
  if (data) { /* Listed out possible scenarios of how the response data might be wrapped */
    const payload = data.data || data.result;
    result = payload || data;
  }
  return result;
};

function getDataFromResult(res) {
  if (Array.isArray(res)) {
    const result = [];
    res.map(obj =>
      result.push(getPayloadFromData(obj))
    );
    return result;
  }
  if (res) {
    return getPayloadFromData(res);
  }
}
/* Utility functions */