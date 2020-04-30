import { createReducer } from "redux-act";
import { Map } from 'immutable';

import { loginSupliUserActionSuccess, loginSupliUserActionFailure, loginSupliUserActionRequest } from '../../actions/authenticatedSupliUser/authenticatedSupliUser'
import { InitialState } from '../../data/models/initialState';

export const REDUCER_KEY = "supliUser/login"

const reducer = createReducer(
    {
        [loginSupliUserActionSuccess]: (state, { payload: authenticatedSupliUser }) => {
            return state.set(['data'], authenticatedSupliUser)
        },
    },
    new InitialState({
        data: Map()
    })
)

export default {
    [REDUCER_KEY]: reducer
}