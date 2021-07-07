import {RootState} from 'app/store';

import {initialTestConfigState as testConfigState} from 'app/modules/TestConfig/reducers';
import {
  initialCommonState as commonState,
  initialAppDataState as appDataState,
} from 'app/common/reducers';
import {initialWalletState as walletState} from 'app/modules/Wallet/reducers';

const defaultState: RootState = {
  testConfigState,
  commonState,
  appDataState,
  walletState,
  _persist: {
    version: 1,
    rehydrated: true,
  },
};

export {defaultState};
