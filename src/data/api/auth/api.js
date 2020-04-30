import { call } from 'redux-saga/effects';
import routes from '../auth/routes';

import api from '../auth/index';
import { AuthenticatedSupliUser } from '../../models/SuppliUser/suppliUser';

function* login(login, password) {
  console.log(login)
  const { body } = yield call(api.post, routes.POST_AUTH_LOGIN, {
    body: {
      login: login,
      password: password,
    },
  });

  return new AuthenticatedSupliUser(body);
}
export default {
  login
};
