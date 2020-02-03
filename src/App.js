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
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/components/theme';
import { useDarkMode } from './useDarkMode';

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <AuthProvider>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Router>
          <Switch>
            <Route path="/login" component={FormLogin} />
            <Layout toggleTheme={toggleTheme} theme={theme}>
              <Route exact path="/" component={Elements} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/home" component={Home} />
              <Route path="/widgets" component={Widgets} />
              <Route path="/forms" component={Forms} />
              <Route path="/charts" component={Charts} />
            </Layout>
          </Switch>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
