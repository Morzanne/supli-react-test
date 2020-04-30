import { call } from 'redux-saga/effects';

import { executeRequest } from '../api/requestBuilder';
import api from '../api/index';

const authenticatedSupliUserApi = {
  get: function*(...params) {
    return yield call(executeRequest, api.get, ...params);
  },
  post: function*(...params) {
    return yield call(executeRequest, api.post, ...params);
  },
};

export default authenticatedSupliUserApi;
