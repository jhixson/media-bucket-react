import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { CssBaseline, createTheme, ThemeProvider } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import client from "./ApolloClient";

const theme = createTheme({
  palette: {
    primary: grey,
    text: {
      primary: "#e1e2e2",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#1e1f1f",
        },
      },
    },
    MuiGrid: {
      container: {
        maxWidth: "100%",
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <CssBaseline />
        <App />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
