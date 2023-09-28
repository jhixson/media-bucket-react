import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPH_URL || "http://localhost:4000/graph",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
