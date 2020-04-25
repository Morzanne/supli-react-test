import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import NavigationBar from './index'
import { toggleUiNavbarAction } from '../../../actions/navigation/navbar/navbar';
import { toggleUiSearchBarAction } from '../../../actions/navigation/navbar/searchbar';
import { mainUser } from '../../../data/mockDatas/user';
import { fetchUserActionRequest } from '../../../actions/user/user';

import { getMessagesCount } from '../../../selectors/user/user';

export const NavbarContainer = () => {
    const dispatch = useDispatch()

    const messagesCount = useSelector(state => {
        return getMessagesCount(state)
    })

    // set the timeout to simulate a basic async api call
    const fetchUser = useCallback(async () => {
        const user = await new Promise(resolve => {
            setTimeout(() => {
                resolve(mainUser)
            })
        }, 2000);

        dispatch(fetchUserActionRequest(user))
    }, [dispatch])

    useEffect(() => {
        fetchUser()
    }, [fetchUser])

    const handleToggle = () => {
        dispatch(toggleUiNavbarAction())
    }

    const handleSearchBarToggle = () => {
        dispatch(toggleUiSearchBarAction())
    }

    return <NavigationBar messagesCount={messagesCount} toggle={handleToggle} toggleSearchBar={handleSearchBarToggle} />

}