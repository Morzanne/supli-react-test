import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import saga from './sagas/';

import { sagaMiddleware } from './middleware';

import './App.scss';

const App = () => (
  <Provider store={store}>
    HELLO
  </Provider>
);

export default App;

sagaMiddleware.run(saga);
