import {createSelector} from 'reselect';

import type {RootState} from 'app/store';

const selectCommonState = (state: RootState) => state.commonState;

const selectAlert = createSelector(
  selectCommonState,
  commonState => commonState.alert,
);

export {selectAlert};
