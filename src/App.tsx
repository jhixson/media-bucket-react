import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/item/:id" render={() => <p>item details</p>} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
