import {all} from '@redux-saga/core/effects';
import {testConfigWatcher} from 'app/modules/TestConfig/sagas';
import {watchRequestSaga} from 'app/sagas';

const rootSaga = function* () {
  yield all([watchRequestSaga(), testConfigWatcher()]);
};

export {rootSaga};
