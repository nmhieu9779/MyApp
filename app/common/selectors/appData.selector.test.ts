import {defaultState} from 'app/mocks';
import {selectAppLanguage} from './appData.selector';

describe('appData selector', () => {
  it('selectAppLanguage', () => {
    expect(selectAppLanguage(defaultState)).toStrictEqual(
      defaultState.appDataState.appLanguage,
    );
  });
});
