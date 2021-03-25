import React from "react";
import { useDispatch } from "react-redux";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { doDecrementCartItemQuantity, doIncrementCartItemQuantity, doRemoveFromCartItem } from "../../logic/actions/requests";
import CartCard from "../Card/CartCard";
import "./cart.scss";
const Cart = ({ showCart, handleCartClose ,cartData,currentCurrency}) => {
    const dispatch = useDispatch();
    const renderCart = (cartData) =>{
        let cartelems = []
        for(let i in cartData){
            cartelems.push(
                <CartCard index={i} item={cartData[i]} currentCurrency={currentCurrency} handleDecrementItemQuantity={handleDecrementItemQuantity} handleIncrementItemQuantity={handleIncrementItemQuantity} />
            )
        }
        return cartelems
    }

    const handleIncrementItemQuantity = (selectedItem)=>{
        console.log("selectedItem",selectedItem)
        dispatch(doIncrementCartItemQuantity(selectedItem,cartData.cart))
    }

    const handleDecrementItemQuantity = (selectedItem,index) =>{
                 if(selectedItem.quantity === 1){
                dispatch(doRemoveFromCartItem(cartData.cart,index))
            }else{
                dispatch(doDecrementCartItemQuantity(selectedItem,cartData.cart))
            }
    }
  return (
    <SlidingPane
      className=""
      overlayClassName="cartSidePane"
      isOpen={showCart}
      title="YOUR CART"
      width={"600px"}
      onRequestClose={handleCartClose}
    >
        {renderCart(cartData.cart)}

      <br />
      <div className="cart-footer-container">
            <div className="cart-footer-content">
              <div className="cart-total-container">
                <span>Subtotal</span>
                <span>
                  {/* {formatMoney(
                    getTotalAmount(state.cart),
                    props.data?.selectedCurrency
                  )} */}
                  4500
                </span>
              </div>
              <button className="make-subscription">
                Make this a subscription (Save 20%)
              </button>
              <button className="proceed-checkout">
                Proceed to checkout
              </button>
            </div>
          </div>
    </SlidingPane>
  );
};
export default Cart;
