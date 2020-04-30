import React from 'react';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import configureStore, { history } from './store';
import saga from './sagas/';

import { sagaMiddleware } from './middleware';
import { ConnectedRouter } from 'connected-react-router'

import './App.scss';
import HomePage from './pages/Homepage';
import Footer from './components/footer';
import routes from './routes';
import LoginPage from './pages/LoginPage';

const store = configureStore()

const App = () => (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={routes.home.path} render={props => <HomePage {...props} />} />
          <Route exact path={routes.login.path} render={props => <LoginPage {...props} />} />
        </Switch>
        <Footer />
      </ConnectedRouter>
    </Provider>
);

export default App;

sagaMiddleware.run(saga);
