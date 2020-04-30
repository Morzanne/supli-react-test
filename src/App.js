import React from 'react';
import { Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import saga from './sagas/';
import { sagaMiddleware } from './middleware';
import configureStore, { history } from './store';
import HomePage from './pages/Homepage';
import Footer from './components/footer';
import routes from './routes';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/authentication/PrivateRoute';
import PublicRoute from './components/authentication/PublicRoute';

import './App.scss';

const store = configureStore()

const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <PrivateRoute exact path={routes.home.path} render={props => <HomePage {...props} />} />
          <PublicRoute exact path={routes.login.path} render={props => <LoginPage {...props} />} redirect={routes.home.path} />
        </Switch>
        <Footer />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;

sagaMiddleware.run(saga);
