import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './modules/layout/Layout';
import { Elements } from './modules/pages/Elements';
import { Dashboard } from './modules/pages/Dashboard';
import { Home } from './modules/pages/Home';
import { Widgets } from './modules/pages/Widgets';
import { Forms } from './modules/pages/Forms';
import { Charts } from './modules/pages/Charts';
import { FormLogin } from './modules/pages/FormLogin';
import { AuthProvider } from './Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={FormLogin} />
          <Layout>
            <Route exact path="/" component={Elements} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/home" component={Home} />
            <Route path="/widgets" component={Widgets} />
            <Route path="/forms" component={Forms} />
            <Route path="/charts" component={Charts} />
          </Layout>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
