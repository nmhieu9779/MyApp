import {RootState} from 'app/store';

import {initialState as testConfigState} from 'app/modules/TestConfig/reducers';
import {initialState as commonState} from 'app/common/reducers';

const defaultState: RootState = {
  testConfigState,
  commonState,
  _persist: {
    version: 1,
    rehydrated: true,
  },
};

export {defaultState};
