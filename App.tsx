/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';

import {store} from 'app/store';
import {TestConfigScreen} from 'app/modules/TestConfig/screens';

const App = () => {
  return (
    <Provider store={store}>
      <TestConfigScreen />
    </Provider>
  );
};

export default App;
