import React from 'react';
import { useSelector } from 'react-redux'

import NavigationBar from './index'

import { getMessagesCount } from '../../../selectors/user/user';

export const NavbarContainer = () => {

    const messagesCount = useSelector(state => {
        return getMessagesCount(state)
    })

    return <NavigationBar messagesCount={messagesCount} />

}