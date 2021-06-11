import React from 'react';
import {StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

import {RCText} from 'app/component';
import {colors, FontSize} from 'app/common/theme';

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

const WalletTransactionItem = (props: any) => {
  const {categoryName, walletName, transactionDate, transactionType, amount} =
    props;

  return (
    <View style={styles.container}>
      <MaterialIcons
        name={'category'}
        size={40}
        style={StyleSheet.flatten([
          styles.icon,
          {
            backgroundColor:
              transactionType === 'income' ? colors.income : colors.expenses,
          },
        ])}
        color={colors.white}
      />
      <View style={styles.nameContainer}>
        <RCText fontWeight={'400'} fontSize={FontSize.large}>
          {categoryName}
        </RCText>
        <RCText fontSize={FontSize.small}>{walletName}</RCText>
      </View>
      <View style={styles.amountContainer}>
        <RCText bold>{amount}</RCText>
        <RCText fontSize={FontSize.small}>
          {moment(transactionDate).format('DD/MM/YYYY')}
        </RCText>
      </View>
      <View
        style={StyleSheet.flatten([
          styles.divider,
          {
            backgroundColor:
              transactionType === 'income' ? colors.income : colors.expenses,
          },
        ])}
      />
    </View>
  );
};

export default WalletTransactionItem;
