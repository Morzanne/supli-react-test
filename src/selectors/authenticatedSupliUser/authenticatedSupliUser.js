import { REDUCER_KEY } from '../../reducers/authenticatedSupliUser/authenticatedSupliUser'

export const getTokenValue = state => state[REDUCER_KEY].data.value;

export const getAuthenticatedSupliUser = state => state[REDUCER_KEY].data;

export const isSupliUserAuthenticated = state => {
    const token = getTokenValue(state);
    const authenticatedSupliUser = getAuthenticatedSupliUser(state);

    return token && authenticatedSupliUser.isAuthenticated()
}