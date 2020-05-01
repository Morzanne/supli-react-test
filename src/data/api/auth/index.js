import { call } from 'redux-saga/effects';

import { executeRequestWithAuth } from '../api/requestBuilder';
import api from '../api/index';

const authenticatedSupliUserApi = {
  post: function* (...params) {
    return yield call(executeRequestWithAuth, api.post, ...params);
  },
};

export default authenticatedSupliUserApi;
