import {useCallback} from 'react';

import {
  hideAlert as hideAlertAction,
  showAlert as showAlertAction,
} from 'app/common/actions';
import {useAppDispatch} from './store';

export type ShowAlert = (message: string, title?: string) => void;
export type HideAlert = () => void;

const useAppAlert = (): [ShowAlert, HideAlert] => {
  const dispatch = useAppDispatch();

  const showAlert = useCallback(
    (message: string, title?: string): void => {
      dispatch(
        showAlertAction({
          title,
          message,
        }),
      );
    },
    [dispatch],
  );

  const hideAlert = useCallback((): void => {
    dispatch(hideAlertAction());
  }, [dispatch]);

  return [showAlert, hideAlert];
};

export {useAppAlert};
