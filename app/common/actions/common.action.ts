import {createAction} from '@reduxjs/toolkit';

const showAlert = createAction<{title?: string; message: string}>('SHOW_ALERT');
const hideAlert = createAction('HIDE_ALERT');

const setAppLanguage = createAction<'en' | 'vi'>('SET_APP_LANGUAGE');

const openDateTimePicker = createAction<{
  onCallback: (date: Date) => void;
  date: Date;
}>('OPEN_DATE_TIME_PICKER');
const closeDateTimePicker = createAction('CLOSE_DATE_TIME_PICKER');

export {
  showAlert,
  hideAlert,
  openDateTimePicker,
  closeDateTimePicker,
  setAppLanguage,
};
