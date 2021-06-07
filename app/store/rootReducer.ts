import {combineReducers} from '@reduxjs/toolkit';
import {testConfigReducer} from 'app/modules/TestConfig/reducers';

const rootReducer = combineReducers({testConfigState: testConfigReducer});

export {rootReducer};
