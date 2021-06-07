import {all, takeLatest} from 'redux-saga/effects';
import {setDataRequest} from 'app/modules/TestConfig/actions';

const onSetDataSaga = function* () {};

const testConfigWatcher = function* () {
  yield all([takeLatest(setDataRequest, onSetDataSaga)]);
};

export {testConfigWatcher, onSetDataSaga};
