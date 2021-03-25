import React from "react";
import { appHelpers } from "../../appHelpers";
import SpaceBottom from "../Space/SpaceBottom";
import "./cartcard.scss";
const CartCard = ({item,currentCurrency}) => {
    console.log("Carr item",item)

    console.log("currentCurrency",currentCurrency)
  return (
    <div class="row">
      <div class="column">
        <div class="card">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h4>{item.title}</h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>plusminus</div>
              <div>{appHelpers.formatPrice(currentCurrency).format(item.price)}</div>
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
