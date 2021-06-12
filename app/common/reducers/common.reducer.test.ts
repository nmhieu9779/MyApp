import {hideAlert, showAlert} from '../actions';
import {commonReducer, initialCommonState} from './common.reducer';

describe('common reducer', () => {
  it('show alert', () => {
    expect(
      commonReducer(
        initialCommonState,
        showAlert({message: 'message', title: 'title'}),
      ),
    ).toEqual({
      ...initialCommonState,
      alert: {
        title: 'title',
        message: 'message',
        isVisible: true,
      },
    });
  });

  it('hide alert', () => {
    expect(commonReducer(initialCommonState, hideAlert())).toEqual(
      initialCommonState,
    );
  });

  it('loading status', () => {
    expect(commonReducer(initialCommonState, {type: 'ABC_REQUEST'})).toEqual({
      ...initialCommonState,
      loadingStatus: {
        ABC_REQUEST: true,
      },
    });

    expect(
      commonReducer(
        {
          ...initialCommonState,
          loadingStatus: {
            ABC_REQUEST: true,
          },
        },
        {type: 'ABC_SUCCESS'},
      ),
    ).toEqual({
      ...initialCommonState,
      loadingStatus: {
        ABC_REQUEST: false,
      },
    });

    expect(
      commonReducer(
        {
          ...initialCommonState,
          loadingStatus: {
            ABC_REQUEST: true,
          },
        },
        {type: 'ABC_ERROR'},
      ),
    ).toEqual({
      ...initialCommonState,
      loadingStatus: {
        ABC_REQUEST: false,
      },
    });
  });
});
