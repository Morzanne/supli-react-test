import { call } from 'redux-saga/effects';
import routes from '../auth/routes';

import api from '../auth/index';
import { toAuthenticatedSupliUser } from '../../models/SuppliUser/suppliUser';

function* login(login, password) {
  const { body } = yield call(api.post, routes.POST_AUTH_LOGIN, {
    body: {
      login: login,
      password: password,
    },
  });

  return toAuthenticatedSupliUser(body);
}
export default {
  login
};
