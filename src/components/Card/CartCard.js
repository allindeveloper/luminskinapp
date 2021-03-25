import React from "react";
import { appHelpers } from "../../appHelpers";
import Minus from "../../assets/images/svg/minus.svg";
import Plus from "../../assets/images/svg/plus.svg";
import SpaceBottom from "../Space/SpaceBottom";
import "./cartcard.scss";
const CartCard = ({index, item, currentCurrency, handleIncrementItemQuantity ,handleDecrementItemQuantity}) => {
  
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h4>{item.title}</h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="cart-product-quantity">
                <img
                  src={Minus}
                  alt="Minus Icon"
                    onClick={()=>handleDecrementItemQuantity(item, index)}
                />
                <span className="cart-product-quantity">
                  {item.quantity}
                </span>
                <img
                  src={Plus}
                  alt="Plus Icon"
                  onClick={() => handleIncrementItemQuantity(item)}
                />
              </div>
              <div>
                {appHelpers.formatPrice(currentCurrency).format(item.price)}
              </div>
            </div>
          </div>
          <div className="cart-image">
            <img src={item.image_url} alt={item.title} />
          </div>
        </div>
        <SpaceBottom length={10} />
      </div>
    </div>
  );
};

export default CartCard;
