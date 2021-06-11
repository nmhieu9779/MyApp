import React, {useCallback} from 'react';
import moment from 'moment';

import {Card, RCList} from 'app/component';
import {LocaleNamespace} from 'app/constants/localeNamespace';
import {useAppTranslation} from 'app/hooks';
import WalletTransactionItem from './WalletTransactionItem';

const WalletTransactions = () => {
  const translate = useAppTranslation(LocaleNamespace.WALLET);

  const renderItem = useCallback(
    item => <WalletTransactionItem {...item} />,
    [],
  );

  return (
    <Card>
      <Card.Title>{translate('TransactionsTitle')}</Card.Title>
      <RCList.MapList
        data={[
          {
            id: 0,
            categoryName: 'Family',
            walletName: 'Wallet',
            transactionDate: moment(),
            transactionType: 'income',
            amount: 100000,
          },
          {
            id: 1,
            categoryName: 'Love',
            walletName: 'Wallet',
            transactionDate: moment(),
            transactionType: 'expense',
            amount: 200000,
          },
        ]}
        idName={'id'}
        renderItem={renderItem}
      />
    </Card>
  );
};

export default WalletTransactions;
