import React, {memo, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {VictoryPie} from 'victory-native';
import ContentLoader from 'react-native-easy-content-loader';

import {Card, RCText} from 'app/component';
import {colors, FontSize} from 'app/common/theme';
import {useAppTranslation} from 'app/hooks';
import {LocaleNamespace} from 'app/constants';

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.small,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
  },
  amountContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'space-around',
  },
  amountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const WalletSummary = () => {
  const translate = useAppTranslation(LocaleNamespace.WALLET);
  const [state, setState] = useState([0, 0]);

  useEffect(() => {
    setTimeout(() => {
      setState([200000, 500000]);
    }, 2000);
  }, []);

  return (
    <Card borderRadius={5}>
      <Card.Title>{translate('SummaryTitle')}</Card.Title>
      <ContentLoader avatar loading={state[0] === 0} pRows={3}>
        <RCText style={styles.title}>{'Jun 2020'}</RCText>
        <View style={styles.container}>
          <VictoryPie
            width={80}
            height={80}
            colorScale={[colors.expenses, colors.income]}
            data={state}
            innerRadius={35}
            radius={20}
            padAngle={3}
            labels={[]}
          />
          <View style={styles.amountContainer}>
            <View style={styles.amountItem}>
              <RCText>{`${translate('Income')}:`}</RCText>
              <RCText>{'500.000'}</RCText>
            </View>
            <View style={styles.amountItem}>
              <RCText>{`${translate('Expenses')}:`}</RCText>
              <RCText>{'200.000'}</RCText>
            </View>
            <View style={styles.amountItem}>
              <RCText>{`${translate('Total')}:`}</RCText>
              <RCText>{'300.000'}</RCText>
            </View>
          </View>
        </View>
      </ContentLoader>
    </Card>
  );
};

export default memo(WalletSummary);
