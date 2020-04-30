import { createReducer } from "redux-act";
import { Map } from 'immutable';

import { fetchUserActionSuccess, fetchUserActionRequest } from '../../actions/user/user';
import { InitialState } from '../../data/models/initialState';
import { User } from "../../data/models/User/user";

export const REDUCER_KEY = "user/fetch"

const reducer = createReducer(
    {
        [fetchUserActionSuccess]: (state, payload) => {
            return state.set(['data'], payload).set('isFetchingDatas', false)
        },
        [fetchUserActionRequest]: state =>
            state.set('isFetchingDatas', true)
    },

    new InitialState({
        data: new User()
    })
)

export default {
    [REDUCER_KEY]: reducer
}

