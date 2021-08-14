import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ApolloProvider } from "@apollo/client";
import client from "../ApolloClient";
import Home from "../Home";

const Component = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);

test("updates state on click", async () => {
  render(<Component />);

  const checked = await screen.findByLabelText("Cool Runnings");
  userEvent.click(checked);
  await waitFor(() => expect(checked).not.toBeChecked());
});
