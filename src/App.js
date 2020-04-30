import React from 'react';
import { Provider } from 'react-redux';
import configureStore, { history } from './store';
import saga from './sagas/';

import { sagaMiddleware } from './middleware';
import { ConnectedRouter } from 'connected-react-router'
import { NavbarContainer } from './components/navigation/Navbar/NavbarContainer';

import './App.scss';
import HomePage from './pages/Homepage';
import Footer from './components/footer';
import LoginFormContainer from './components/authentication/LoginForm/LoginFormContainer';

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <NavbarContainer />
      <HomePage />
      <LoginFormContainer lumiere={"troli"} />
      <Footer />
    </ConnectedRouter>
  </Provider>
);

export default App;

sagaMiddleware.run(saga);
