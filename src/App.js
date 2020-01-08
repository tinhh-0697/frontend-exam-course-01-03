import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './modules/layout/Layout';
import { Elements } from './modules/pages/Elements';
import { FormLogin } from './modules/pages/FormLogin';
import { AuthProvider } from './Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={FormLogin} />
          <Layout>
            <Route path="/elements" component={Elements} />
          </Layout>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
