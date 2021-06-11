import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {WalletExpenses, WalletSummary} from 'app/modules/Wallet/components';
import {RCList} from 'app/component';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Wallet = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RCList.ScrollView>
        <WalletSummary />
        <WalletExpenses />
      </RCList.ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;
