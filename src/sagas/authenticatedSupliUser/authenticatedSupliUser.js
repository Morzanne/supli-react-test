import { call, put, takeEvery } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form/immutable';

import api from '../../data/api/auth/api';
import { loginSupliUserActionSuccess, loginSupliUserActionFailure, loginSupliUserActionRequest } from '../../actions/authenticatedSupliUser/authenticatedSupliUser'

export function* sendLoginData({ payload: { form } }) {
  const body = {
    ...form,
    login: form.login,
    password: form.password,
  };

  const authenticatedSuppliUser = yield call(api.login, body.login, body.password);
  yield put(loginSupliUserActionSuccess(authenticatedSuppliUser));
}

function buildFormErrors(error) {
  const fallBackError = {
    _error: "Echec de l'authentification",
  };

  if (!error.details) {
    return fallBackError;
  }

  return {
    _error: error.details.message || "Echec de l'authentification",
  };
}

export function* submitLoginForm({ payload: { values } }) {
  try {
    yield call(sendLoginData, values);
  } catch (error) {
    const errors = buildFormErrors(error);
    yield put(loginSupliUserActionFailure(new SubmissionError(errors)));
  }
}

export const sagas = [
  takeEvery(
    loginSupliUserActionRequest,
    submitLoginForm
  )
]
