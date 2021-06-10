import {RootState} from 'app/store';
import {initialState as testConfigState} from 'app/modules/TestConfig/reducers';
import {initialState as commonState} from 'app/common/reducers';
import {selectAlert, selectLoadingStatus} from './common.selector';

describe('common selector', () => {
  const defaultState: RootState = {
    testConfigState,
    commonState,
  };

  it('selectAlert', () => {
    expect(selectAlert(defaultState)).toStrictEqual(
      defaultState.commonState.alert,
    );
  });

  it('selectLoadingStatus', () => {
    expect(selectLoadingStatus(['ABC'])(defaultState)).toStrictEqual(false);
  });
});
