import { call } from 'redux-saga/effects';

import { methods, urls } from './constants';
import { executeRequest } from './requestBuilder';

const api = {
  post: function*(route, requestConfig) {
    return yield call(executeRequest, {
      method: methods.POST,
      url: urls.API,
      route,
      requestConfig
    });
  },
};

export { default as codes } from './constants';

export default api;
