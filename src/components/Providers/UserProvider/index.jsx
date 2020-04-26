import { useEffect, useCallback } from 'react';
import PT from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../../selectors/user/user';
import { fetchUserActionRequest } from '../../../actions/user/user';
import { mainUser } from '../../../data/mockDatas/user';

export const UserProvider = ({ children }) => {

    const dispatch = useDispatch()

    // set the timeout to simulate a basic async api call
    const fetchUser = useCallback(async () => {
        const user = await new Promise(resolve => {
            setTimeout(() => {
                resolve(mainUser)
            })
        }, 3000);

        dispatch(fetchUserActionRequest(user))
    }, [dispatch])


    const user = useSelector(state => {
        return getUser(state)
    })

    useEffect(() => {
        fetchUser()
    }, [fetchUser])

    return children({ user: user })
}

UserProvider.propTypes = {
    children: PT.func.isRequired,
}

export default UserProvider;