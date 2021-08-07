import React from "react";
import { render, screen } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";
import client from "../ApolloClient";
import Home from "../Home";

const Component = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);

test("renders list of items", async () => {
  render(<Component />);

  const category = await screen.findAllByText(/Movies/);
  expect(category).toHaveLength(1);

  const items = await screen.findAllByText(/Future/);
  expect(items).toHaveLength(2);
});
