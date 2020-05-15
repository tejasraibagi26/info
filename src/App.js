import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage';
import CertificatePage from './pages/certificate';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/info" component = {HomePage} />
        <Route exact path = "/info/certificate" component = {CertificatePage} />
      </Switch>
    </Router>
  );
}

export default App;