import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

import {rootReducer} from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  whitelist: ['testConfigState', 'appDataState'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export {persistConfig, persistedReducer};
