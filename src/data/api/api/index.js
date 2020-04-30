import { call } from 'redux-saga/effects';

import { methods, urls } from './constants';
import { executeRequest } from './requestBuilder';

const api = {
  post: function*(route, requestConfig, responseConfig) {
    return yield call(executeRequest, {
      method: methods.POST,
      url: urls.API,
      route,
      requestConfig,
      responseConfig,
    });
  },
};

export { default as codes } from './constants';

export default api;
