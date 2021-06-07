import {createAction} from '@reduxjs/toolkit';

const setData = createAction<number>('test-config/set-data');

export {setData};
