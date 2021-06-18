import {createSelector} from 'reselect';

import type {RootState} from 'app/store';

const selectTestConfigState = (state: RootState) => state.testConfigState;

const selectData = createSelector(selectTestConfigState, testConfigState => {
  return testConfigState.data;
});

export {selectData};
