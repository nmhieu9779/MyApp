import {hideAlert, showAlert} from '../actions';
import {commonReducer, initialState} from './common.reducer';

describe('common reducer', () => {
  it('show alert', () => {
    expect(
      commonReducer(
        initialState,
        showAlert({message: 'message', title: 'title'}),
      ),
    ).toEqual({
      alert: {
        title: 'title',
        message: 'message',
        isVisible: true,
      },
    });
  });

  it('hide alert', () => {
    expect(commonReducer(initialState, hideAlert())).toEqual(initialState);
  });
});
