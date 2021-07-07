import {setDataSuccess} from '../actions';
import {initialTestConfigState, testConfigReducer} from './testConfig.reducer';

describe('testConfig reducer', () => {
  it('update data', () => {
    expect(
      testConfigReducer(initialTestConfigState, setDataSuccess({value: 1})),
    ).toEqual({
      data: 1,
    });
  });
});
