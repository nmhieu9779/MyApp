import {takeLatest} from '@redux-saga/core/effects';
import {testSaga} from 'redux-saga-test-plan';
import {setDataRequest} from '../actions';

import {onSetDataSaga, testConfigWatcher} from './testConfig.saga';

describe('testConfig saga', () => {
  it('should invoke the right saga', () => {
    testSaga(testConfigWatcher)
      .next()
      .all([takeLatest(setDataRequest, onSetDataSaga)])
      .finish()
      .isDone();
  });

  it('should success selectData  call', () => {
    testSaga(onSetDataSaga).next().isDone();
  });
});
