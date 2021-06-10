import {createSelector} from 'reselect';

import type {RootState} from 'app/store';

const selectCommonState = (state: RootState) => state.commonState;

const selectAlert = createSelector(
  selectCommonState,
  commonState => commonState.alert,
);

const selectLoadingStatus = (actionsName: Array<string>) =>
  createSelector(selectCommonState, commonState =>
    actionsName.some(actionName => commonState.loadingStatus[actionName]),
  );

export {selectAlert, selectLoadingStatus};
