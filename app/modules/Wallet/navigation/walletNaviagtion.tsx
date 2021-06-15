import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {WalletScreen, AddTransactionScreen} from '../screens';
import {TransactionIcons} from '../components';
import {ScreenName} from 'app/constants/screenName';
import {useAppTranslation} from 'app/hooks';
import {LocaleNamespace} from 'app/constants/localeNamespace';

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
    </Stack.Navigator>
  );
};

export {WalletNavigator};
