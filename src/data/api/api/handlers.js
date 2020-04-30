import { codes } from './constants';
import { ApiError, errorMap } from './errors';


const DEFAULT_STATUS_TEXT = `Error when sending a request to the API`;

export async function handleHttpErrors(response) {
  if (response.status !== codes.BAD_REQUEST) {
    return;
  }

  const error = errorMap[response.status];
  const details = await response.json();
  if (error) {
    throw new error(response.statusText, details);
  }
  throw new ApiError(response.statusText || DEFAULT_STATUS_TEXT, details);
}
