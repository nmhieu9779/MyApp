import React from 'react';
import {SafeAreaView} from 'react-native';

import {WalletSummary} from 'app/modules/Wallet/components';

const Wallet = () => {
  return (
    <SafeAreaView>
      <WalletSummary />
    </SafeAreaView>
  );
};

export default Wallet;
