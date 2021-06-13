import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {WalletScreen} from '../screens';
import {TransactionIcons} from '../components';
import {ScreenName} from 'app/constants/screenName';

const Stack = createStackNavigator();

const WalletNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name={ScreenName.WALLET}
        component={WalletScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenName.TRANSACTION_ICONS}
        component={TransactionIcons}
        options={{
          ...TransitionPresets.ModalTransition,
        }}
      />
    </Stack.Navigator>
  );
};

export {WalletNavigator};
