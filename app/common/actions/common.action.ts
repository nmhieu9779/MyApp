import {createAction} from '@reduxjs/toolkit';

const showAlert = createAction<{title?: string; message: string}>('SHOW_ALERT');
const hideAlert = createAction('HIDE_ALERT');

const setAppLanguage = createAction<'en' | 'vi'>('SET_APP_LANGUAGE');

export {showAlert, hideAlert, setAppLanguage};
