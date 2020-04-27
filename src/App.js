import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import saga from './sagas/';

import { sagaMiddleware } from './middleware';
import { NavbarContainer } from './components/navigation/Navbar/NavbarContainer';

import './App.scss';
import HomePage from './pages/Homepage';
import Footer from './components/footer';

const App = () => (
  <Provider store={store}>
    <NavbarContainer />
    <HomePage />
    <Footer />
  </Provider>
);

export default App;

sagaMiddleware.run(saga);
