import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import moment from 'moment';

import {RCText, RCIcon} from 'app/component';
import {assets, colors, FontSize} from 'app/common/theme';
import {CategoryTypeDto, TransactionDto} from '../../dto';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  icon: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  nameContainer: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-around',
  },
  amountContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  divider: {
    width: 3,
    marginLeft: 10,
  },
});

const WalletTransactionItem = (props: TransactionDto) => {
  const {category, wallet, date, amount} = props;

  const isIncome = useMemo(
    () => category.type === CategoryTypeDto.IN_COME,
    [category],
  );

  return (
    <View style={styles.container}>
      <RCIcon
        source={assets.budget.publicTransport}
        container={40}
        type={'circle'}
        containerStyle={{
          backgroundColor: isIncome ? colors.income : colors.expenses,
        }}
      />
      <View style={styles.nameContainer}>
        <RCText fontWeight={'400'} fontSize={FontSize.large}>
          {category.name}
        </RCText>
        <RCText fontSize={FontSize.small}>{wallet.name}</RCText>
      </View>
      <View style={styles.amountContainer}>
        <RCText bold>{amount}</RCText>
        <RCText fontSize={FontSize.small}>
          {moment(date).format('DD/MM/YYYY')}
        </RCText>
      </View>
      <View
        style={StyleSheet.flatten([
          styles.divider,
          {
            backgroundColor: isIncome ? colors.income : colors.expenses,
          },
        ])}
      />
    </View>
  );
};

export default WalletTransactionItem;
