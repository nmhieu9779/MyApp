/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'app/i18Next';

import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from 'app/store';
import {RootNavigation} from 'app/navigation';
import {Alert} from 'app/component';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigation />

          <Alert />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
