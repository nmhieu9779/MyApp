import {setDataSuccess} from '../actions';
import {initialState, testConfigReducer} from './testConfig.reducer';

describe('testConfig reducer', () => {
  it('update data', () => {
    expect(testConfigReducer(initialState, setDataSuccess({value: 1}))).toEqual(
      {
        data: 1,
      },
    );
  });
});
