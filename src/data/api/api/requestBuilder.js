import { call } from 'redux-saga/effects';

import { buildBody } from './utils';
import { handleHttpErrors } from './handlers';

export function* executeRequest({
    url: baseUrl,
    method,
    route,
    requestConfig = { params: {}, headers: {} },
}) {
    const { request } = yield call(buildRequest, baseUrl, method, route, requestConfig);
    const result = yield call(fetch, "https://supli-staging.mysupli.com/api/auth-tokens", request);
    const response = yield call(buildResponse, result);
    return response;
}

export function* executeRequestWithAuth(
    executeRequest,
    route,
    requestConfig = {}
) {
    try {
        const response = yield call(executeRequest, route, requestConfig);
        return response;
    } catch (error) {
        throw error;
    }
}

function* buildRequest(baseUrl, method, route, config) {
    const { params, headers } = config;
    const fullUrl = `${baseUrl}${route}`;
    const body = yield call(buildBody, method, config.body);
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
