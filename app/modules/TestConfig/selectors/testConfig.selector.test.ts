import {defaultState} from 'app/mocks/defaultState';
import {selectData} from './testConfig.selector';

describe('testConfig selector', () => {
  it('selectData', () => {
    expect(selectData(defaultState)).toStrictEqual(
      defaultState.testConfigState.data,
    );
  });
});
