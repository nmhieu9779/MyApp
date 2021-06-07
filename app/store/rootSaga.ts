import {all} from '@redux-saga/core/effects';
import {testConfigWatcher} from 'app/modules/TestConfig/sagas';

const rootSaga = function* () {
  yield all([testConfigWatcher()]);
};

export {rootSaga};
