import {createReducer} from '@reduxjs/toolkit';
import {setData} from '../actions';

interface TestConfigState {
  data: number;
}

const initialState = {data: 0} as TestConfigState;

const testConfigReducer = createReducer(initialState, builder => {
  builder.addCase(setData, (state, action) => {
    state.data = state.data + action.payload;
  });
});

export {testConfigReducer, initialState};
