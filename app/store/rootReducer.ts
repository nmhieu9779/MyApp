import {combineReducers} from '@reduxjs/toolkit';

import {commonReducer} from 'app/common/reducers';
import {testConfigReducer} from 'app/modules/TestConfig/reducers';

const rootReducer = combineReducers({
  testConfigState: testConfigReducer,
  commonState: commonReducer,
});

export {rootReducer};
