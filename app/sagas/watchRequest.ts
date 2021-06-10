import {call, put, takeEvery} from '@redux-saga/core/effects';
import {AxiosResponse} from 'axios';
import {camelCase, endsWith} from 'lodash';

import {api, makeRequest} from 'app/services';
import {ERROR_POSTFIX, REQUEST_POSTFIX, SUCCESS_POSTFIX} from './constants';
import {showAlert} from 'app/common/actions';

function* watchRequest({type, payload}: any) {
  try {
    const getApiRequestProperties = api[camelCase(type)];

    if (!getApiRequestProperties) {
      return;
    }

    const requestProperties = getApiRequestProperties(payload);

    const response: AxiosResponse<any> = yield call(
      makeRequest,
      requestProperties,
    );

    yield put({
      type: type.replace(REQUEST_POSTFIX, SUCCESS_POSTFIX),
      payload: response.data,
    });
  } catch (error) {
    yield put(
      showAlert({
        title: error?.response?.status,
        message: error?.response?.data?.message,
      }),
    );
    yield put({
      type: type.replace(REQUEST_POSTFIX, ERROR_POSTFIX),
      error: error?.response?.data,
    });
  }
}

const isActionWithRequest = (action: any) =>
  endsWith(action.type, REQUEST_POSTFIX);

const watchRequestSaga = function* () {
  yield takeEvery(isActionWithRequest, watchRequest);
};

export {watchRequestSaga};
