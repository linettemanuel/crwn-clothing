import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'

import HomePage from "./pages/homepage/homepage.component"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage } />
        <Route exact  />
      </Switch>
    </div>
  );
}

export default App;
