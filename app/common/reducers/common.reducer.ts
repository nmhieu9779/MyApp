import {createReducer} from '@reduxjs/toolkit';
import {
  ERROR_POSTFIX,
  REQUEST_POSTFIX,
  SUCCESS_POSTFIX,
} from 'app/sagas/constants';
import _ from 'lodash';

import {
  closeDateTimePicker,
  hideAlert,
  openDateTimePicker,
  showAlert,
} from '../actions';

interface CommonState {
  alert: {
    isVisible: boolean;
    title: string;
    message: string;
  };
  loadingStatus: {
    [key: string]: boolean;
  };
  dateTimePicker: {
    isVisible: boolean;
    date: Date;
    onCallback: (date: Date) => void;
  };
}

const initialCommonState = {
  alert: {
    isVisible: false,
    title: '',
    message: '',
  },
  loadingStatus: {},
  dateTimePicker: {
    isVisible: false,
  },
} as CommonState;

const commonReducer = createReducer(initialCommonState, builder => {
  builder.addCase(showAlert, (state, action) => {
    state.alert = _.merge(state.alert, action.payload, {isVisible: true});
  });
  builder.addCase(hideAlert, state => {
    state.alert = initialCommonState.alert;
  });
  builder.addCase(openDateTimePicker, (state, action) => {
    state.dateTimePicker = _.merge(state.dateTimePicker, action.payload, {
      isVisible: true,
    });
  });
  builder.addCase(closeDateTimePicker, state => {
    state.dateTimePicker = initialCommonState.dateTimePicker;
  });
  builder.addMatcher(
    action => {
      const request = _.endsWith(action.type, REQUEST_POSTFIX);
      const error = _.endsWith(action.type, ERROR_POSTFIX);
      const success = _.endsWith(action.type, SUCCESS_POSTFIX);
      return request || error || success;
    },
    (state, action) => {
      if (_.endsWith(action.type, REQUEST_POSTFIX)) {
        state.loadingStatus[action.type] = true;
      } else {
        const key = action.type.replace(
          _.endsWith(action.type, SUCCESS_POSTFIX)
            ? SUCCESS_POSTFIX
            : ERROR_POSTFIX,
          REQUEST_POSTFIX,
        );
        state.loadingStatus[key] = false;
      }
    },
  );
});

export {commonReducer, initialCommonState};
