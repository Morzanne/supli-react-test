import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'
import { connectRouter } from 'connected-react-router'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import reducers from './reducers'
import middleware from './middleware'

export const createReducer = innerHistory => combineReducers({
  router: connectRouter(innerHistory),
  ...reducers,
  form: formReducer
})

export const history = createBrowserHistory()


export default function configureStore() {
  const store = createStore(
    createReducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), ...middleware))
  );

  return store;
}