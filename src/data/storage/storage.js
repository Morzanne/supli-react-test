import localStorage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';

import InitialState from '../models/initialState';
import { AuthenticatedSupliUser } from '../models/SuppliUser/suppliUser';

export default {
    key: 'root',
    storage: localStorage,
    debug: true,
    whitelist: ['supliUser/login'],
    transforms: [immutableTransform({ records: [InitialState, AuthenticatedSupliUser] })], // adds immutable-js support
};
