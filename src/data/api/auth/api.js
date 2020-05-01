import { call } from 'redux-saga/effects';
import routes from '../auth/routes';

import api from '../auth/index';
import { AuthenticatedSupliUser, SupliUser } from '../../models/SuppliUser/suppliUser';

function* login(login, password) {
  const responseBody = yield call(api.post, routes.POST_AUTH_LOGIN, {
    body: {
      login: login,
      password: password,
    },
  });
  console.log('called')
  return new AuthenticatedSupliUser({
    ...responseBody,
    user: new SupliUser({
      ...responseBody.user
    })
  });
}
export default {
  login
};
