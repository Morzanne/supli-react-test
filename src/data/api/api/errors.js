import { codes } from './constants';

export const status = {
  BAD_REQUEST: 'BadRequest',
};

export class ApiError extends Error {
  status = status.BAD_REQUEST;
  constructor(message = 'ApiError: Error sending a request to the API', details = {}) {
    super(message);
    this.details = details;
  }
}

export class BadRequestError extends ApiError {
  status = status.BAD_REQUEST;
  constructor(message = 'BadRequest', ...rest) {
    const fullMessage = `BadRequestError: ${message}`;
    super(fullMessage, ...rest);
  }
}


export const errorMap = {
  [codes.BAD_REQUEST]: BadRequestError,
};
