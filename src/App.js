import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './modules/layout/Layout';
import { Elements } from './modules/pages/Elements';
import { Login } from './modules/pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <Route path="/elements" component={Elements} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
