import { call } from 'redux-saga/effects';

import { executeRequestWithAuth } from '../api/requestBuilder';
import api from '../api/index';

const authenticatedSupliUserApi = {
  get: function* (...params) {
    return yield call(executeRequestWithAuth, api.get, ...params);
  },
  post: function* (...params) {
    return yield call(executeRequestWithAuth, api.post, ...params);
  },
};

export default authenticatedSupliUserApi;
