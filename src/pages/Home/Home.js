import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Aux from "../../components/hoc/_Aux";
import Products from "../../components/UI/Products";
import "./home.scss";


const Home = (props) => {
  
  const productsSelector = useSelector((state) => state.productsReducer);
  const productsData = productsSelector && productsSelector;

  const currencyData = useSelector((state) => state.currencyReducer);


  useEffect(()=>{
    console.log("productsSelector",productsData)

    console.log("currencySelector",currencyData)

  },[])

  return (
    <Aux>
      <div className="jumbotron">
        <Header />
        
        <Products/>
      </div>
    </Aux>
  );
};
export default Home;
