import {combineReducers} from '@reduxjs/toolkit';

import {appDataReducer, commonReducer} from 'app/common/reducers';
import {testConfigReducer} from 'app/modules/TestConfig/reducers';
import {walletReducer} from 'app/modules/Wallet/reducers';

const rootReducer = combineReducers({
  testConfigState: testConfigReducer,
  commonState: commonReducer,
  appDataState: appDataReducer,
  walletState: walletReducer,
});

export {rootReducer};
