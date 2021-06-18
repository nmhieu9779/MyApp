import {createReducer} from '@reduxjs/toolkit';

import {setAppLanguage} from '../actions';

interface AppDataState {
  appLanguage: string;
}

const initialAppDataState = {
  appLanguage: 'en',
} as AppDataState;

const appDataReducer = createReducer(initialAppDataState, builder => {
  builder.addCase(setAppLanguage, (state, action) => {
    state.appLanguage = action.payload;
  });
});

export {appDataReducer, initialAppDataState};
