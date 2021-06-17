import {defaultState} from 'app/mocks';
import {
  selectAlert,
  selectDateTimePicker,
  selectLoadingStatus,
} from './common.selector';

describe('common selector', () => {
  it('selectAlert', () => {
    expect(selectAlert(defaultState)).toStrictEqual(
      defaultState.commonState.alert,
    );
  });

  it('selectLoadingStatus', () => {
    expect(selectLoadingStatus(['ABC'])(defaultState)).toStrictEqual(false);
  });

  it('selectDateTimePicker', () => {
    expect(selectDateTimePicker(defaultState)).toStrictEqual(
      defaultState.commonState.dateTimePicker,
    );
  });
});
