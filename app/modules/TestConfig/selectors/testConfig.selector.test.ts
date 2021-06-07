import {RootState} from 'app/store';
import {initialState} from '../reducers';
import {selectData} from './testConfig.selector';

describe('testConfig selector', () => {
  const defaultState: RootState = {
    testConfigState: initialState,
  };

  it('selectData', () => {
    expect(selectData(defaultState)).toStrictEqual(
      defaultState.testConfigState.data,
    );
  });
});
