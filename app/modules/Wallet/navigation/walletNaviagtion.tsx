import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {WalletScreen, AddTransactionScreen} from '../screens';
import {TransactionIcons, SelectCategory} from '../components';
import {ScreenName, LocaleNamespace} from 'app/constants';
import {useAppTranslation} from 'app/hooks';

const Stack = createStackNavigator();

const WalletNavigator = () => {
  const translate = useAppTranslation(LocaleNamespace.DEFAULT);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name={ScreenName.WALLET}
        component={WalletScreen}
        options={{title: translate('WalletTitle')}}
      />
      <Stack.Screen
        name={ScreenName.TRANSACTION_ICONS}
        component={TransactionIcons}
        options={{
          ...TransitionPresets.ModalTransition,
        }}
      />
      <Stack.Screen
        name={ScreenName.ADD_TRANSACTION}
        options={{title: translate('AddTransactionTitle')}}
        component={AddTransactionScreen}
      />
      <Stack.Screen
        name={ScreenName.SELECT_CATEGORY}
        options={{
          title: translate('AddTransactionTitle'),
          ...TransitionPresets.ModalTransition,
        }}
        component={SelectCategory}
      />
    </Stack.Navigator>
  );
};

export {WalletNavigator};
