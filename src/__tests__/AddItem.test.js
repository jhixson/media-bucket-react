import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ApolloProvider } from "@apollo/client";
import client from "../ApolloClient";
import Home from "../Home";

const Component = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);

test("display add item dialog", async () => {
  render(<Component />);

  const addButton = await screen.findByRole("button", { name: "Add Item" });
  userEvent.click(addButton);
  const dialogInput = await screen.findByLabelText("Title");
  expect(dialogInput).toBeVisible();
});

test("add item to category", async () => {
  render(<Component />);

  const addButton = await screen.findByRole("button", { name: "Add Item" });
  userEvent.click(addButton);
  const dialogInput = await screen.findByLabelText("Title");
  userEvent.type(dialogInput, "Mac and Me");
  userEvent.click(screen.getByRole("button", { name: "Submit" }));
  const newItem = await screen.findByText("Mac and Me");
  expect(newItem).toBeVisible();
  expect(dialogInput).toHaveValue("");
});
