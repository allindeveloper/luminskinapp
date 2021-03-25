import actionTypes from "../actions/actionTypes";

const initialState = {
  allcurrencies:[],
  allcurrenciesLoading:false
};

const currencyReducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.GET_ALL_CURRENCY_PENDING:
      return {
        ...state,
        allcurrencies:action.payload.value
      };
    case actionTypes.GET_ALL_CURRENCY_SUCCESS:
      return {
        ...state,
        allcurrencies: action.payload.allcurrencies,
        allcurrenciesLoading:false
      };
    default:
      return state;
  }
};

export default currencyReducer;
