import {setAppLanguage} from '../actions';
import {appDataReducer, initialAppDataState} from './appData.reducer';

describe('appData reducer', () => {
  it('set app language', () => {
    expect(appDataReducer(initialAppDataState, setAppLanguage('vi'))).toEqual({
      ...initialAppDataState,
      appLanguage: 'vi',
    });
  });
});
