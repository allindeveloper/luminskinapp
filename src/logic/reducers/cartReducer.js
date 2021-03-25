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
    case actionTypes.INCREMENT_ITEM_QUANITY:
      let newCartAdd;
      let selectedItem = action.payload.selectedItem;
      newCartAdd = action.payload.cart.map((item) => {
        if (item.id === selectedItem.id) {
          item.quantity += 1;
        }
        return item;
      });

      return {
        ...state,
        cart: newCartAdd,
      };
    case actionTypes.DECREMENT_ITEM_QUANITY:
      let newCartMinus;
      let minusSelectedItem = action.payload.selectedItem;
      newCartMinus = action.payload.cart.map((item) => {
        if (item.id === minusSelectedItem.id) {
          item.quantity -= 1;
        }
        return item;
      });

      return {
        ...state,
        cart: newCartMinus,
      };
    case actionTypes.REMOVE_FROM_CART_ITEM:
      let allCartRemove = action.payload.cart;
      let index = action.payload.index
      allCartRemove.splice(index, 1);
      return {
        ...state,
        cart: allCartRemove,
      };
    default:
      return state;
  }
};

export default cartReducer;
