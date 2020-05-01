import { call, put, takeLatest } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form/immutable';

import api from '../../data/api/auth/api';
import { loginSupliUserActionSuccess, loginSupliUserActionFailure, loginSupliUserActionRequest } from '../../actions/authenticatedSupliUser/authenticatedSupliUser'

export function* sendLoginData({ login, password }) {
  const authenticatedSuppliUser = yield call(api.login, login, password);
  yield put(loginSupliUserActionSuccess({ payload: authenticatedSuppliUser, isFetchingDatas: false }));
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

export function* submitLoginForm({ payload: { form } }) {
  try {
    yield call(sendLoginData, form);
  } catch (error) {
    const errors = buildFormErrors(error);
    yield put(loginSupliUserActionFailure(new SubmissionError(errors)));
  }
}

export const sagas = [
  takeLatest(
    loginSupliUserActionRequest,
    submitLoginForm
  )
]
