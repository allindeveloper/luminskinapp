import {
  ApolloClient,
  InMemoryCache
} from "@apollo/client";
import { createHttpLink } from "apollo-link-http";

const GRAPHQL_API = process.env.REACT_APP_GRAPHQL_API;

const link = createHttpLink({ uri: GRAPHQL_API });

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache: cache,
  link: link,
});

export default client;
