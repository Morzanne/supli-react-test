import PT from 'prop-types';
import { useSelector } from 'react-redux';
import { getUser } from '../../../selectors/user/user';

export const UserProvider = ({ children }) => {

    const user = useSelector(state => {
        return getUser(state)
    })
    return children({ user: user })
}

UserProvider.propTypes = {
    children: PT.func.isRequired,
}

export default UserProvider;