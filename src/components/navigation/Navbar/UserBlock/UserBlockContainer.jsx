import React from 'react';
import { useSelector } from 'react-redux'
import { getUser } from '../../../../selectors/user/user';
import UserBlock from '.';

export const UserBlockContainer = () => {
    const user = useSelector(state => {
        return getUser(state)
    })

    return <UserBlock user={user} />
}