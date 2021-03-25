import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Aux from "./_Aux";

export class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <Aux>
          <Switch>
            <Route
              path={"/"}
              exact
              render={(props) => <Home {...this.props} />}
            />

          </Switch>
       </Aux>
    );
  }
}

export default withRouter(Layout);
