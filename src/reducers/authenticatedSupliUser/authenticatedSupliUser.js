import { createReducer } from "redux-act";

import { loginSupliUserActionSuccess } from '../../actions/authenticatedSupliUser/authenticatedSupliUser'
import { InitialState } from '../../data/models/initialState';
import { AuthenticatedSupliUser } from "../../data/models/SuppliUser/suppliUser";

export const REDUCER_KEY = "supliUser/login"

const reducer = createReducer(
    {
        [loginSupliUserActionSuccess]: (state, { payload: authenticatedSupliUser }) => {
            return state.set(['data'], authenticatedSupliUser)
        },
    },
    new InitialState({
        data: new AuthenticatedSupliUser()
    })
)

export default {
    [REDUCER_KEY]: reducer
}