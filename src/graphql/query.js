import gql from "graphql-tag";
import client from "./client";

const query = (value) => {
  return client.query({
    query: gql`
      ${value}
    `,
  });
};

export default query;
