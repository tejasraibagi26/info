import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/info" component = {HomePage} />
      </Switch>
    </Router>
  );
}

export default App;