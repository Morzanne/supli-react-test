import React from 'react';
import { useSelector } from 'react-redux'
import { getUser } from '../../../selectors/user/user';
import SummaryDashboard from '.';


export const SummaryDashBoardContainer = () => {
    const user = useSelector(state => {
        return getUser(state)
    })

    return <SummaryDashboard user={user} />
}