import {setData} from '../actions';
import {initialState, testConfigReducer} from './testConfig.reducer';

describe('testConfig reducer', () => {
  it('update data', () => {
    expect(testConfigReducer(initialState, setData(1))).toEqual({
      data: 1,
    });
  });
});
