import { Record, List } from 'immutable';

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

AuthenticatedSupliUser.prototype.isAuthenticated = function() {
    return this.value !== null;
  };

