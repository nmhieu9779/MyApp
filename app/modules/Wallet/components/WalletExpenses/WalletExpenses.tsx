import React, {memo, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {VictoryAxis, VictoryBar, VictoryChart} from 'victory-native';
import ContentLoader from 'react-native-easy-content-loader';

import {Card} from 'app/component';
import {colors} from 'app/common/theme';
import {useAppTranslation, useAppDimensions} from 'app/hooks';
import {LocaleNamespace} from 'app/constants/localeNamespace';

const styles = StyleSheet.create({
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
});

const WalletExpenses = () => {
  const {windowWidth, fontScale} = useAppDimensions();
  const translate = useAppTranslation(LocaleNamespace.WALLET);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const data = [
    {y: 200000, x: '05/06'},
    {y: 500000, x: '06/06'},
    {y: 0, x: '07/06'},
    {y: 100000, x: '08/06'},
    {y: 123123, x: '09/06'},
    {y: 432123, x: '10/06'},
  ];

  return (
    <Card borderRadius={5}>
      <Card.Title>{translate('ExpensesTitle')}</Card.Title>
      <ContentLoader loading={loading}>
        <VictoryChart
          height={200}
          width={windowWidth + windowWidth * (1 - fontScale)}
          domainPadding={19}
          style={{parent: styles.chartContainer}}>
          <VictoryAxis />
          <VictoryBar
            data={data}
            labels={[200, 500, 0, 100, 123, 432, 123]}
            barWidth={40}
            style={{data: {fill: colors.expenses}}}
            cornerRadius={3}
          />
        </VictoryChart>
      </ContentLoader>
    </Card>
  );
};

export default memo(WalletExpenses);
