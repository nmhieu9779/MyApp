import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {WalletScreen, AddTransactionScreen} from '../screens';
import {
  TransactionIcons,
  SelectCategory,
  AddCategory,
  Note,
} from '../components';
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
        options={{
          title: translate('WalletTitle'),
        }}
        component={WalletScreen}
      />
      <Stack.Screen
        name={ScreenName.ADD_TRANSACTION}
        options={{
          title: translate('AddTransactionTitle'),
        }}
        component={AddTransactionScreen}
      />
      <Stack.Screen
        name={ScreenName.SELECT_CATEGORY}
        options={{
          title: translate('SelectCategoryTitle'),
          ...TransitionPresets.ModalTransition,
        }}
        component={SelectCategory}
      />
      <Stack.Screen
        name={ScreenName.ADD_CATEGORY}
        options={{
          title: translate('AddCategoryTitle'),
          ...TransitionPresets.ModalTransition,
        }}
        component={AddCategory}
      />
      <Stack.Screen
        name={ScreenName.TRANSACTION_ICONS}
        options={{
          title: translate('TransactionIcons'),
          ...TransitionPresets.ModalTransition,
        }}
        component={TransactionIcons}
      />
      <Stack.Screen
        name={ScreenName.NOTE}
        options={{
          title: translate('Note'),
          ...TransitionPresets.ModalTransition,
        }}
        component={Note}
      />
    </Stack.Navigator>
  );
};

export {WalletNavigator};
