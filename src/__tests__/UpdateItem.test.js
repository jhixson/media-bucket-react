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

test("display update item dialog", async () => {
  render(<Component />);

  const updateButton = await screen.findAllByRole("button", {
    name: "Update Item",
  });
  userEvent.click(updateButton[0]);
  const dialogInput = await screen.findByRole("button", { name: "Save" });
  expect(dialogInput).toBeVisible();
});

test("update item", async () => {
  render(<Component />);

  const updateButton = await screen.findAllByRole("button", {
    name: "Update Item",
  });
  userEvent.click(updateButton[0]);
  const dialogInput = await screen.findByLabelText("Title");
  userEvent.clear(dialogInput);
  userEvent.type(dialogInput, "Mac and Me");
  userEvent.click(screen.getByRole("button", { name: "Save" }));
  const updatedItem = await screen.findByText("Mac and Me");
  expect(updatedItem).toBeVisible();
});
