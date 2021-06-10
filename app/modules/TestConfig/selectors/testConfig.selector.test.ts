import {RootState} from 'app/store';
import {initialState as testConfigState} from 'app/modules/TestConfig/reducers';
import {initialState as commonState} from 'app/common/reducers';
import {selectData} from './testConfig.selector';

describe('testConfig selector', () => {
  const defaultState: RootState = {
    testConfigState,
    commonState,
  };

  it('selectData', () => {
    expect(selectData(defaultState)).toStrictEqual(
      defaultState.testConfigState.data,
    );
  });
});
