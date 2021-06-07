import {createReducer} from '@reduxjs/toolkit';
import {setDataSuccess} from '../actions';

interface TestConfigState {
  data: number;
}

const initialState = {data: 0} as TestConfigState;

const testConfigReducer = createReducer(initialState, builder => {
  builder.addCase(setDataSuccess, (state, action) => {
    state.data = state.data + action.payload.value;
  });
});

export {testConfigReducer, initialState};
