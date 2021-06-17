import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import {persistedReducer} from './persistConfigs';
import {rootSaga} from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ] as const,
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store, persistor};
