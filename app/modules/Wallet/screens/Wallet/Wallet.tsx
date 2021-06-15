import React, {useCallback, useLayoutEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {
  WalletExpenses,
  WalletSummary,
  WalletTransactions,
} from 'app/modules/Wallet/components';
import {RCList, RCButton, RCIcon} from 'app/component';
import {ButtonType, RootStackParamList} from 'app/type';
import {assets} from 'app/common/theme';
import {ScreenName} from 'app/constants/screenName';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Wallet = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onAddTransaction = useCallback(() => {
    navigation.navigate(ScreenName.ADD_TRANSACTION);
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <RCButton type={ButtonType.CLEAR} onPress={onAddTransaction}>
          <RCIcon source={assets.transaction} container={40} />
        </RCButton>
      ),
    });
  }, [navigation, onAddTransaction]);

  return (
    <SafeAreaView style={styles.container}>
      <RCList.ScrollView>
        <WalletSummary />
        <WalletExpenses />
        <WalletTransactions />
      </RCList.ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;
