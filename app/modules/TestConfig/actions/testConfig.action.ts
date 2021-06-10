import {createAction} from '@reduxjs/toolkit';

export enum TestConfigAction {
  SetDataRequest = 'SET_DATA_REQUEST',
  SetDataSuccess = 'SET_DATA_SUCCESS',
}

const setDataRequest = createAction(TestConfigAction.SetDataRequest);
const setDataSuccess = createAction<{value: number}>(
  TestConfigAction.SetDataSuccess,
);

export {setDataRequest, setDataSuccess};
