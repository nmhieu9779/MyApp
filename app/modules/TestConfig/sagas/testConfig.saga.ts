import {all, takeLatest} from 'redux-saga/effects';
import {setData} from 'app/modules/TestConfig/actions';

const onSetDataSaga = function* () {};

const testConfigWatcher = function* () {
  yield all([takeLatest(setData, onSetDataSaga)]);
};

export {testConfigWatcher, onSetDataSaga};
