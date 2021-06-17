import {useCallback} from 'react';

import {
  closeDateTimePicker as closeDateTimePickerAction,
  openDateTimePicker as openDateTimePickerAction,
} from 'app/common/actions';
import {useAppDispatch} from './store';

export type OpenDateTimePicker = (
  date: Date,
  onCallback: (date: Date) => void,
) => void;
export type CloseDateTimePicker = () => void;

const useDateTimePicker = (): [OpenDateTimePicker, CloseDateTimePicker] => {
  const dispatch = useAppDispatch();

  const openDateTimePicker: OpenDateTimePicker = useCallback(
    (date, onCallback) => {
      dispatch(openDateTimePickerAction({date, onCallback}));
    },
    [dispatch],
  );

  const closeDateTimePicker: CloseDateTimePicker = useCallback(() => {
    dispatch(closeDateTimePickerAction());
  }, [dispatch]);

  return [openDateTimePicker, closeDateTimePicker];
};

export {useDateTimePicker};
