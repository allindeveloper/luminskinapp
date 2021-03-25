import actionTypes from "../actions/actionTypes";

const initialState = {
  cart: [],
 };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let product = action.payload.product;
      let cart = action.payload.cart;
      let newProduct;
      const cartItem = cart.find((item) => item.id === product.id);
      if (cartItem) {
        newProduct = cart.map((item) => {
          if (item.id === cartItem.id) {
            item.quantity += 1;
          }
          return item;
        });
      } else {
        cart.push(product);
        newProduct = cart.map((item) =>
          Object.assign({}, item, { quantity: 1 })
        );
      }
    
      return {
        ...state,
        cart: newProduct,
      };
 case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: action.payload.cart,
      };
    default:
      return state;
  }
};

export default cartReducer;
