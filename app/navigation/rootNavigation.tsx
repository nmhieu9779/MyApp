import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';

import {TestConfigScreen} from 'app/modules/TestConfig/screens';

const Stack = createStackNavigator();

const RootNavigation = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <Stack.Navigator initialRouteName={'SplashScreen'}>
      <Stack.Screen name={'TestConfig'} component={TestConfigScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
