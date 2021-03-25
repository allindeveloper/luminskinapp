import actionTypes from "../actions/actionTypes";

const initialState = {
  allcurrencies:[],
  allcurrenciesLoading:false,
  currentCurrency:""
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
        currentCurrency:action.payload.allcurrencies[0],
        allcurrenciesLoading:false
      };
    
      case actionTypes.SET_CURRENT_CURRENCY:
        return {
          ...state,
          currentCurrency: action.payload.currentCurrency,
        };
   
    default:
      return state;
  }
};

export default currencyReducer;
