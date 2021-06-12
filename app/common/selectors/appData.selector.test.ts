import {defaultState} from 'app/mocks/defaultState';
import {selectAppLanguage} from './appData.selector';

describe('appData selector', () => {
  it('selectAppLanguage', () => {
    expect(selectAppLanguage(defaultState)).toStrictEqual(
      defaultState.appDataState.appLanguage,
    );
  });
});
