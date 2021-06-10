import {createAction} from '@reduxjs/toolkit';

const showAlert = createAction<{title?: string; message: string}>('SHOW_ALERT');
const hideAlert = createAction('HIDE_ALERT');

export {showAlert, hideAlert};
