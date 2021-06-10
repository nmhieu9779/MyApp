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
      ...initialState,
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

  it('loading status', () => {
    expect(commonReducer(initialState, {type: 'ABC_REQUEST'})).toEqual({
      ...initialState,
      loadingStatus: {
        ABC_REQUEST: true,
      },
    });

    expect(
      commonReducer(
        {
          ...initialState,
          loadingStatus: {
            ABC_REQUEST: true,
          },
        },
        {type: 'ABC_SUCCESS'},
      ),
    ).toEqual({
      ...initialState,
      loadingStatus: {
        ABC_REQUEST: false,
      },
    });

    expect(
      commonReducer(
        {
          ...initialState,
          loadingStatus: {
            ABC_REQUEST: true,
          },
        },
        {type: 'ABC_ERROR'},
      ),
    ).toEqual({
      ...initialState,
      loadingStatus: {
        ABC_REQUEST: false,
      },
    });
  });
});
