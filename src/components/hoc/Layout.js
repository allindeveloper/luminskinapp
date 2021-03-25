import React from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { fetchAllCurrency, fetchAllProducts } from "../../logic/actions/requests";
import Home from "../../pages/Home/Home";
import Aux from "./_Aux";

const  Layout  = (props) => {
  const dispatch = useDispatch();

  React.useEffect( ()=>{
    dispatch( fetchAllProducts("USD"));
    dispatch( fetchAllCurrency());

  },[])
    return (
      <Aux>
          <Switch>
            <Route
              path={"/"}
              exact
              render={(props) => <Home  />}
            />

          </Switch>
       </Aux>
    );
  
}

export default withRouter(Layout);
