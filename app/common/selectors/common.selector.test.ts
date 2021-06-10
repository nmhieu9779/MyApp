import {defaultState} from 'app/mocks/defaultState';
import {selectAlert, selectLoadingStatus} from './common.selector';

describe('common selector', () => {
  it('selectAlert', () => {
    expect(selectAlert(defaultState)).toStrictEqual(
      defaultState.commonState.alert,
    );
  });

  it('selectLoadingStatus', () => {
    expect(selectLoadingStatus(['ABC'])(defaultState)).toStrictEqual(false);
  });
});
