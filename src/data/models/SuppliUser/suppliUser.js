import parse from 'date-fns/parse';
import { Record, List, fromJS, Map } from 'immutable';

export const SupliUser = Record(
    {
        id: null,
        roles: new List() || null,
        userType: null,
        gender: null,
        firstname: null,
        lastname: null,
        company: null
    },
    'SupliUser'
)

export const AuthenticatedSupliUser = Record(
    {
        id: null,
        value: null,
        createdAt: null,
        user: new SupliUser()
    },
    'AuthenticatedSupliUser'
)


Object.defineProperty(AuthenticatedSupliUser.prototype, 'isAuthenticated', {
    get: function () {
        return this.value !== null;
    }
})

export const toAuthenticatedSupliUser = authenticatedSupliUser =>
    new AuthenticatedSupliUser(
        fromJS({
            ...authenticatedSupliUser,
            createdAt: parseFromApiDate(authenticatedSupliUser.createdAt)
        })
    )

//UTIL
export function parseFromApiDate(date) {
    if (date) {
        return parse(date);
    }

    return null;
}