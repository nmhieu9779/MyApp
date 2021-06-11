import React from 'react';
import {SafeAreaView} from 'react-native';

import {WalletExpenses, WalletSummary} from 'app/modules/Wallet/components';

const Wallet = () => {
  return (
    <SafeAreaView>
      <WalletSummary />
      <WalletExpenses />
    </SafeAreaView>
  );
};

export default Wallet;
