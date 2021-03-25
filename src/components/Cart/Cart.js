import React from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import CartCard from "../Card/CartCard";
import "./cart.scss";
const Cart = ({ showCart, handleCartClose ,cartData,currentCurrency}) => {

    const renderCart = (cartData) =>{
        let cartelems = []
        for(let i in cartData){
            cartelems.push(
                <CartCard item={cartData[i]} currentCurrency={currentCurrency} />
            )
        }
        return cartelems
    }
  return (
    <SlidingPane
      className=""
      overlayClassName="productSidePane"
      isOpen={showCart}
      title="YOUR CART"
      width={"600px"}
      onRequestClose={handleCartClose}
    >
        {renderCart(cartData.cart)}

      <br />
    </SlidingPane>
  );
};
export default Cart;
