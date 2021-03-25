import React from 'react';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./cart.scss";
const Cart = ({showCart}) =>{


    return(
<SlidingPane
            className=""
            overlayClassName="productSidePane"
            isOpen={showCart}
            title="YOUR CART"
            width={"500px"}
            onRequestClose={() => {
              // triggered on "<" on left top click or on outside click
            //   this.setState({ isPaneOpen: false });
            }}
          >
            <div>
                Hiiii
            </div>

            <br />
          </SlidingPane>
    )
}
export default Cart;