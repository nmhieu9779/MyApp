import {createAction} from '@reduxjs/toolkit';

const setDataRequest = createAction('SET_DATA_REQUEST');
const setDataSuccess = createAction<{value: number}>('SET_DATA_SUCCESS');

export {setDataRequest, setDataSuccess};
