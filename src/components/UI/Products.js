import React, { useEffect, useState } from "react";
import ReactPlaceholder from "react-placeholder";
import styled from "styled-components";
import query from "../../graphql/query";
import { getAllCurrencies } from "../../graphql/services/currency";
import { getAllProducts } from "../../graphql/services/products";

const Products = () => {
  const [data, setData] = useState({
    isLoading: true,
    showError: false,
    allproducts: [],
    currencies: [],
    selectedCurrency: "USD",
    showCart: false,
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let selectedCurrency = data.selectedCurrency;
      const currenciesResponse = await query(getAllCurrencies());
      const allproducts = await fetchAllProducts(selectedCurrency);
      const currencies = currenciesResponse?.data?.currency || [];
      selectedCurrency = currencies.length ? currencies[0] : selectedCurrency;
      setData({
        ...data,
        isLoading: false,
        allproducts,
        currencies,
        selectedCurrency,
      });
    } catch (err) {
      console.error(err);
      setData({ ...data, isLoading: false, showError: true });
    }
  };

  React.useEffect(() => {
    console.log("data", data);
  }, []);

  const fetchAllProducts = async (selectedCurrency) => {
    const productsResponse = await query(getAllProducts(selectedCurrency));
    const allproducts = productsResponse?.data?.products || [];
    return allproducts;
  };
  const renderProducts = (allproducts) => {
    let domElems = [];
    console.log("allproducts",allproducts)
    for (let i in allproducts) {
      domElems.push(
        <li className="product-item" key={allproducts[i].id}>
          <img src={allproducts[i].image_url} alt={allproducts[i].title} />
          <h2>{allproducts[i].title}</h2>
          <p>From: </p>
          <button type="button">Add to Cart</button>
        </li>
      );
    }
    return domElems;
  };
  return (
    <StyledContainer>
      <ReactPlaceholder ready={true} customPlaceholder={<div>Loading</div>}>
        <ul>{!data.isLoading && renderProducts(data.allproducts)}</ul>
      </ReactPlaceholder>
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
