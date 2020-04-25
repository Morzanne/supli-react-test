import { REDUCER_KEY } from '../../reducers/user/user'

export const getMessagesCount = state => {
    return state[REDUCER_KEY].data.messagesCount
};

export const isMessagesCountFetching = state => {
    return state[REDUCER_KEY].isFetchingDatas
}

export const getDailyViewCount = state => {
    return state[REDUCER_KEY].data.dailyViewsCount
}

export const getUser = state => {
    return state[REDUCER_KEY].data
}