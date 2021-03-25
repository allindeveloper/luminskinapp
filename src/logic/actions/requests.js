import query from "../../graphql/query";
import { getAllCurrencies } from "../../graphql/services/currency";
import { getAllProducts } from "../../graphql/services/products";
import actionTypes, {
  fetchAllCurrencyPending,
  fetchAllCurrencySuccess,
  fetchAllProductsPending,
  fetchAllProductsSuccess,
  setAddCurrentCurrency, setAddToCart, setDecrementItemQuantity, setIncrementItemQuantity, setRemoveFromCartItem
} from "./actionTypes";

/* Utility functions */

const getPayloadFromData = (res) => {
  let result = {};
  const data = res.data;
  if (data) {
    /* Listed out possible scenarios of how the response data might be wrapped */
    const payload = data.data || data.result;
    result = payload || data;
  }
  return result;
};

const getDataFromResult = (res) => {
  if (Array.isArray(res)) {
    const result = [];
    res.map((obj) => result.push(getPayloadFromData(obj)));
    return result;
  }
  if (res) {
    return getPayloadFromData(res);
  }
};
/* Utility functions */

export function requestData(subtype) {
  return {
    type: actionTypes.BEGIN_REQUEST,
    subtype,
  };
}

export function requestSuccess(data) {
  return {
    type: actionTypes.REQUEST_SUCCESS,
    data,
  };
}
export function requestFailure(error) {
  return {
    type: actionTypes.REQUEST_FAILURE,
    error,
  };
}

/** Formerly known as fetchData */
export function promiseAction(apiRequest, action) {
  return (dispatch) => {
    dispatch({ type: actionTypes.BEGIN_REQUEST });
    apiRequest
      .then((res) => {
        console.log("Result data", res);
        action.payload = getDataFromResult(res);
        requestSuccess(action.payload);
        dispatch(action);
      })
      .catch((err) => {
        action.error = true; // We might want to submit the error messages
        action.payload = err.response || {};
        requestFailure(err);
        dispatch(action);
      });
  };
}

export function doIncrementCartItemQuantity(selectedItem,cart) {
  return (dispatch) => {
    dispatch(setIncrementItemQuantity(selectedItem,cart));
  };
}

export function doDecrementCartItemQuantity(selectedItem,cart) {
  return (dispatch) => {
    dispatch(setDecrementItemQuantity(selectedItem,cart));
  };
}

export function doSetCurrentCurrency(currentCurrency) {
  return (dispatch) => {
    dispatch(setAddCurrentCurrency(currentCurrency));
  };
}

export function doSetAllToCart(cart,product) {
  return (dispatch) => {
    dispatch(setAddToCart(cart,product));
  };
}

export function doRemoveFromCartItem(cart,index) {
  return (dispatch) => {
    dispatch(setRemoveFromCartItem(cart,index));
  };
}

export function fetchAllProducts(selectedCurrency) {
  return (dispatch) => {
    dispatch(fetchAllProductsPending(true));
    return query(getAllProducts(selectedCurrency)).then((response) => {
      const allproducts = response?.data?.products || [];
      dispatch(fetchAllProductsSuccess(allproducts));
      return allproducts;
    });
  };
}

export function fetchAllCurrency() {
  return (dispatch) => {
    dispatch(fetchAllCurrencyPending(true));
    return query(getAllCurrencies()).then((response) => {
      const currencies = response?.data?.currency || [];
      dispatch(fetchAllCurrencySuccess(currencies));
      return currencies;
    });
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
