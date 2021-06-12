import {RootState} from 'app/store';

import {initialTestConfigState as testConfigState} from 'app/modules/TestConfig/reducers';
import {
  initialCommonState as commonState,
  initialAppDataState as appDataState,
} from 'app/common/reducers';

const defaultState: RootState = {
  testConfigState,
  commonState,
  appDataState,
  _persist: {
    version: 1,
    rehydrated: true,
  },
};

export {defaultState};
