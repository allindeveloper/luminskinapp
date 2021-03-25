import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appHelpers } from "../../appHelpers";
import { doSetAllToCart } from "../../logic/actions/requests";
import Cart from "../Cart/Cart";
import GridLoader from "../Loader/GridLoader";
import ProductContainer from "./productStyle";

const Products = () => {
  const dispatch = useDispatch();
  const productsSelector = useSelector((state) => state.productsReducer);
  const productsData = productsSelector && productsSelector;

  const currencySelector = useSelector((state) => state.currencyReducer);
  const currencyData = currencySelector && currencySelector;

  const cartSelector = useSelector((state) => state.cartReducer);
  const cartData = cartSelector && cartSelector;

  const [showCart, setshowCart] = useState(false);

  const handleAddToCart = (product) => {
    let cart = cartData.cart;
    dispatch(doSetAllToCart(cart, product));
    setshowCart(true);
  };
  const renderProducts = (allproducts) => {
    let domElems = [];
    const {currentCurrency} = currencyData
    for (let i in allproducts) {
      domElems.push(
        <li className="product-item" key={allproducts[i].id}>
          <img src={allproducts[i].image_url} alt={allproducts[i].title} />
          <h2>{allproducts[i].title}</h2>
          <p>From:{appHelpers.formatPrice(currentCurrency).format(allproducts[i].price)} </p>
          <button type="button" onClick={() => handleAddToCart(allproducts[i])}>
            Add to Cart
          </button>
        </li>
      );
    }
    return domElems;
  };

  useEffect(()=>{
    console.log("productsData.allproducts",productsData.allproducts)
  },[])
  const handleCartClose = () => {
    setshowCart(false);
  };
  return (
    <ProductContainer>
      
      <GridLoader show={productsData.allproductsLoading}/>
        <ul>
          {!productsData.allproductsLoading &&
            renderProducts(productsData.allproducts)}
        </ul>
     
      <Cart
        handleCartClose={handleCartClose}
        showCart={showCart}
        allcurrencies={currencyData.allcurrencies}
        cartData={cartData}
        allproducts={productsData.allproducts}
        currentCurrency={currencyData.currentCurrency}
      />
    </ProductContainer>
  );
};



export default Products;
