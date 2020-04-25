import { Record } from 'immutable';

export const InitialState = Record(
    {
        data: null,
        isFetchingDatas: false,
    },
);

export default InitialState;
