import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { appHelpers } from "../../appHelpers";
import {
  doDecrementCartItemQuantity,
  doIncrementCartItemQuantity,
  doRemoveFromCartItem,
  doSetCurrentCurrency,
  dosetUpdateCart,
  fetchAllProducts
} from "../../logic/actions/requests";
import CartCard from "../Card/CartCard";
import ArrowRight from "../CustomIcon/ArrowRight";
import "./cart.scss";
const Cart = ({allproducts, showCart, handleCartClose, cartData,allcurrencies, currentCurrency }) => {
  const dispatch = useDispatch();
  const mounted = useRef();

  const renderCart = (cartData) => {
    let cartelems = [];
    for (let i in cartData) {
      cartelems.push(
        <CartCard
          index={i}
          item={cartData[i]}
          currentCurrency={currentCurrency}
          handleDecrementItemQuantity={handleDecrementItemQuantity}
          handleIncrementItemQuantity={handleIncrementItemQuantity}
          handleRemoveProduct={handleRemoveProduct}
        />
      );
    }
    return cartelems;
  };

  const handleIncrementItemQuantity = (selectedItem) => {
    dispatch(doIncrementCartItemQuantity(selectedItem, cartData.cart));
  };

  const handleDecrementItemQuantity = (selectedItem, index) => {
    if (selectedItem.quantity === 1) {
      dispatch(doRemoveFromCartItem(cartData.cart, index));
    } else {
      dispatch(doDecrementCartItemQuantity(selectedItem, cartData.cart));
    }
  };

 const handleRemoveProduct = (index)=>{
    dispatch(doRemoveFromCartItem(cartData.cart, index));
  }

  const getTotalAmount = (cart) => {
    let total = 0;
    total = cart?.reduce((acc, cur) => {
      acc += cur.price * cur.quantity;
      return acc;
    }, 0);
    return total;
  };

  const handleChangeCurrency = (value) => {
    dispatch( fetchAllProducts(value));
    dispatch(doSetCurrentCurrency(value))
  };

  useEffect(() => {
    
    if (!mounted.current) {
        mounted.current = true;
      } else {
        if(allproducts.length){
            dispatch(dosetUpdateCart(cartData.cart,allproducts))
          }
      }
  }, [allproducts]);

  const renderCurrencies = (allcurrencies)=>{
    let domElems = [];
    for(let i in allcurrencies){
        domElems.push(
            <option value={allcurrencies[i]} >
            {allcurrencies[i]}
          </option>
        )
    }
    return domElems;
  }
  return (
    <SlidingPane
      className=""
      overlayClassName="cartSidePane"
      isOpen={showCart}
      title="YOUR CART"
      width={"600px"}
      onRequestClose={handleCartClose}
      closeIcon={<ArrowRight />}
    >
      <div className="cart-currency-container">
        <select
          className="cart-currency-select"
          onChange={(e) => handleChangeCurrency(e.target.value)}
          value={currentCurrency}
        >
            {allcurrencies.length>0&& renderCurrencies(allcurrencies)}
          {/* {allcurrencies&&allcurrencies?.map((currency) => (
            <option value={currency} >
              {currency}
            </option>
          ))} */}
        </select>
      </div>
      <div className="cart-scroll">
          {renderCart(cartData.cart)}
      </div>
      

      <br />
      <div className="cart-footer-container">
        <div className="cart-footer-content">
          <div className="cart-total-container">
            <span>Subtotal</span>
            <span>
              {appHelpers
                .formatPrice(currentCurrency)
                .format(getTotalAmount(cartData.cart))}
            </span>
          </div>
          <button className="make-subscription">
            Make this a subscription (Save 20%)
          </button>
          <button className="proceed-checkout">Proceed to checkout</button>
        </div>
      </div>
    </SlidingPane>
  );
};
export default Cart;
