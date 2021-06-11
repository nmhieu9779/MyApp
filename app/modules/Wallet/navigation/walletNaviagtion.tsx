import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {WalletScreen} from '../screens';

const Stack = createStackNavigator();

const WalletNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'WalletHome'}
        component={WalletScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {WalletNavigator};
