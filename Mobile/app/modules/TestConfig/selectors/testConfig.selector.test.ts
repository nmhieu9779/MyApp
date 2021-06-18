import {defaultState} from 'app/mocks';
import {selectData} from './testConfig.selector';

describe('testConfig selector', () => {
  it('selectData', () => {
    expect(selectData(defaultState)).toStrictEqual(
      defaultState.testConfigState.data,
    );
  });
});
