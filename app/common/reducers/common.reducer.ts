import {createReducer} from '@reduxjs/toolkit';
import _ from 'lodash';

import {hideAlert, showAlert} from '../actions';

interface CommonState {
  alert: {
    isVisible: boolean;
    title: string;
    message: string;
  };
}

const initialState = {
  alert: {
    isVisible: false,
    title: '',
    message: '',
  },
} as CommonState;

const commonReducer = createReducer(initialState, builder => {
  builder.addCase(showAlert, (state, action) => {
    state.alert = _.merge(state.alert, action.payload, {isVisible: true});
  });
  builder.addCase(hideAlert, state => {
    state.alert = initialState.alert;
  });
});

export {commonReducer, initialState};
