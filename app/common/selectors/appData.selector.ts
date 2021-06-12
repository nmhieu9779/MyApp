import {createSelector} from 'reselect';

import type {RootState} from 'app/store';

const selectAppDataState = (state: RootState) => state.appDataState;

const selectAppLanguage = createSelector(
  selectAppDataState,
  appDataState => appDataState.appLanguage,
);

export {selectAppLanguage};
