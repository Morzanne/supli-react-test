import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import middleware from './middleware'
import storedReducers from './reducers'

export const history = createBrowserHistory()

export default function configureStore() {
  const store = createStore(
    storedReducers(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), ...middleware))
  );

  return store;
}