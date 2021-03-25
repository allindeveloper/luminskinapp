import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { appHelpers } from "../../appHelpers";
import { doSetAllToCart } from "../../logic/actions/requests";
import Cart from "../Cart/Cart";
import GridLoader from "../Loader/GridLoader";

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
    <StyledContainer>
      
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
    </StyledContainer>
  );
};

const StyledContainer = styled.main`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }

  ul {
    max-width: 1220px;
    width: 100%;
    margin: 0 auto;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  li.product-item {
    text-align: center;
    width: calc(50% - 7.5px);
    margin: 2rem 0;

    &:nth-of-type(-n + 3) {
      margin-top: 1rem;
    }

    &:nth-last-of-type(-n + 3) {
      margin-bottom: 1rem;
    }

    @media (min-width: 768px) {
      width: 33.33%;
      margin: 3.5rem 0;
    }

    img {
      object-fit: contain;
      max-width: 150px;
      max-height: 150px;
      height: 100%;
      width: 100%;
    }

    & > h2 {
      font-size: 0.85rem;
      font-weight: 400;
      margin-top: 2rem;
    }

    & > p {
      font-size: 1rem;
      margin-top: 0.4rem;
    }

    & > button {
      margin-top: 1.5rem;
      transition: all 250ms ease 0s;
      outline: none;
      border: 0px;
      font-weight: 600;
      min-height: 50px;
      max-width: 200px;
      width: 100%;
      background: rgb(75, 85, 72);
      color: rgb(252, 252, 249);

      &:hover {
        background: rgb(43, 46, 43);
      }
    }
  }
`;

export default Products;
