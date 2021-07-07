import React, {useCallback} from 'react';

import {Card, RCList} from 'app/component';
import {LocaleNamespace} from 'app/constants';
import {useAppTranslation} from 'app/hooks';
import WalletTransactionItem from './WalletTransactionItem';
import {TransactionDto} from '../../dto';

interface Props {
  data: TransactionDto[];
}

const WalletTransactions = (props: Props) => {
  const {data} = props;
  const translate = useAppTranslation(LocaleNamespace.WALLET);

  const renderItem = useCallback(
    item => <WalletTransactionItem {...item} />,
    [],
  );

  return (
    <Card>
      <Card.Title>{translate('TransactionsTitle')}</Card.Title>
      <RCList.MapList data={data} idName={'id'} renderItem={renderItem} />
    </Card>
  );
};

export default WalletTransactions;
