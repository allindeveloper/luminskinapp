import React from "react";
import Header from "../../components/Header/Header";
import Aux from "../../components/hoc/_Aux";
import Products from "../../components/UI/Products";
import "./home.scss";


const Home = (props) => {
  const CustomService = props.Service(null, null);
  


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
