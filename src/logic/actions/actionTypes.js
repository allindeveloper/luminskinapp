
const actionTypes = {
  GET_ALL_CURRENCY_PENDING: "GET_ALL_CURRENCY_PENDING",
  GET_ALL_CURRENCY_SUCCESS:"GET_ALL_CURRENCY_SUCCESS",

  GET_ALL_PRODUCTS_PENDING:"GET_ALL_PRODUCTS_PENDING",
  GET_ALL_PRODUCTS_SUCCESS:"GET_ALL_PRODUCTS_SUCCESS",

  ADD_TO_CART:"ADD_TO_CART",
  
  REMOVE_FROM_CART_ITEM:"REMOVE_FROM_CART_ITEM",
  SET_CURRENT_CURRENCY:"SET_CURRENT_CURRENCY",


  INCREMENT_ITEM_QUANITY:"INCREMENT_ITEM_QUANITY",

  DECREMENT_ITEM_QUANITY:"DECREMENT_ITEM_QUANITY"
};




export const setIncrementItemQuantity = (selectedItem,cart) => ({
  type: actionTypes.INCREMENT_ITEM_QUANITY,
  payload: { selectedItem ,cart},

});

export const setDecrementItemQuantity = (selectedItem,cart) => ({
  type: actionTypes.DECREMENT_ITEM_QUANITY,
  payload: { selectedItem ,cart},

});

export const setAddCurrentCurrency = (currentCurrency) => ({
  type: actionTypes.SET_CURRENT_CURRENCY,
  payload: { currentCurrency },

});
//cart
export const setAddToCart = (cart,product) => ({
  type: actionTypes.ADD_TO_CART,
  payload: { cart,product },

});
export const setRemoveFromCartItem = (cart,index) => ({
  type: actionTypes.REMOVE_FROM_CART_ITEM,
  payload: { cart ,index},

});


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
