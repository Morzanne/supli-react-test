import { call } from 'redux-saga/effects';

import { buildBody } from './utils';
import { handleHttpErrors } from './handlers';
import { urls } from './constants';

export function* executeRequest({
    method,
    url,
    route,
    requestConfig = { params: {}, headers: {} },
    responseConfig = {},
}) {
    const { request } = yield call(buildRequest, method, route, requestConfig);
    const result = yield call(fetch, url, request);
    const response = yield call(buildResponse, result, responseConfig);
    return response;
}

function* buildRequest(method, endpoint, config) {
    const { params, headers } = config;
    const baseUrl = urls.API
    const fullUrl = `${baseUrl}${endpoint}`;
    const body = yield call(buildBody, method);
    return {
        fullUrl,
        request: {
            method: method.name,
            headers: {
                ...method.defaultHeaders,
                ...headers,
            },
            params,
            body,
        },
    };
}

function* buildResponse(result) {
    try {
        yield call(handleHttpErrors, result);
    } catch (error) {
        throw error;
    }

    return yield call([result, result.json])
}
