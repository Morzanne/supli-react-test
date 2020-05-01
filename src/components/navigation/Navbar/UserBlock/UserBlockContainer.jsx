import React from 'react';
import { useSelector } from 'react-redux'
import { getUser } from '../../../../selectors/user/user';
import UserBlock from '.';
import { getAuthenticatedSupliUser } from '../../../../selectors/authenticatedSupliUser/authenticatedSupliUser';

export const UserBlockContainer = () => {
    const user = useSelector(state => {
        return getAuthenticatedSupliUser(state)
    })

    const fakeUser = useSelector(state => {
        return getUser(state)
    })

    return <UserBlock user={user} fakeUser={fakeUser} />
}