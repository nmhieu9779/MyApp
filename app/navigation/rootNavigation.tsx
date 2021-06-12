import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RNBootSplash from 'react-native-bootsplash';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';

import {TestConfigScreen} from 'app/modules/TestConfig/screens';
import {ScreenName} from 'app/constants/screenName';
import {WalletNavigator} from 'app/modules/Wallet/navigation';
import {selectAppLanguage} from 'app/common/selectors';
import {useAppSelector, useAppTranslation} from 'app/hooks';
import {LocaleNamespace} from 'app/constants/localeNamespace';
import I18n from 'app/i18Next';

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  const translate = useAppTranslation(LocaleNamespace.DEFAULT);
  const lng = useAppSelector(selectAppLanguage);

  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  useEffect(() => {
    I18n.changeLanguage(lng);
  }, [lng]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Wallet'}
        component={WalletNavigator}
        options={{
          tabBarLabel: translate('walletBottom'),
          tabBarIcon: ({color, size}) => (
            <EntypoIcons name={'wallet'} color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name={ScreenName.TEST_CONFIG}
        component={TestConfigScreen}
        options={{
          tabBarLabel: 'Test',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name={'home'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
