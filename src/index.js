import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "./components/hoc/Layout";
import config from "./config";
import * as Constants from "./Constants";
import client from "./graphql/client";
import "./index.css";
import returnStoreAndPersistor from "./logic/configureStore";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

// initialize store
const { store } = returnStoreAndPersistor();
const { persistor } = returnStoreAndPersistor();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter  basename={config.basename}>
        <>
          <ApolloProvider client={client}>
            <Layout Constants={Constants} />
          </ApolloProvider>
        </>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
