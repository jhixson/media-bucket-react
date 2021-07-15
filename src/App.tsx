import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/item/:id" render={() => <p>item details</p>} />
        <Route path="/" render={() => <p>home!</p>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
