
const actionTypes = {
  GET_ALL_CURRENCY_PENDING: "GET_ALL_CURRENCY_PENDING",
  GET_ALL_CURRENCY_SUCCESS:"GET_ALL_CURRENCY_SUCCESS",

  GET_ALL_PRODUCTS_PENDING:"GET_ALL_PRODUCTS_PENDING",
  GET_ALL_PRODUCTS_SUCCESS:"GET_ALL_PRODUCTS_SUCCESS",
  
};
//

//products
export const fetchAllProductsPending = (value) => ({
  type: actionTypes.GET_ALL_PRODUCTS_PENDING,
  payload: { value },

});
export const fetchAllProductsSuccess = (allproducts) => ({
  type: actionTypes.GET_ALL_PRODUCTS_SUCCESS,
  payload: { allproducts },

});
// currency
export const fetchAllCurrencyPending = (value) => ({
  type: actionTypes.GET_ALL_CURRENCY_PENDING,
  payload: { value },

});
export const fetchAllCurrencySuccess = (allcurrencies) => ({
  type: actionTypes.GET_ALL_CURRENCY_SUCCESS,
  payload: { allcurrencies },

});



export const getSession = (history, error) => {
  if (error.response) {
    if (error.response.status === 401) {
      console.log("gotten here", history);
      
      history.push("/");
    }
  }
};

// Redux Actions


export default actionTypes;
