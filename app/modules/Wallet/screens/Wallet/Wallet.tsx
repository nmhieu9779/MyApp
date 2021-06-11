import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import {
  WalletExpenses,
  WalletSummary,
  WalletTransactions,
} from 'app/modules/Wallet/components';
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
        <WalletTransactions />
      </RCList.ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;
