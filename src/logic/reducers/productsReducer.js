import actionTypes from "../actions/actionTypes";

const initialState = {
  allproducts:[],
  allproductsLoading:false
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS_PENDING:
      return {
        ...state,
        allproducts:action.payload.value
      };
    case actionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        allproducts: action.payload.allproducts,
        allproductsLoading:false
      };
    default:
      return state;
  }
};

export default productsReducer;
