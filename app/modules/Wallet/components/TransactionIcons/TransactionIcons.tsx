import React, {useCallback} from 'react';
import {ListRenderItem, StyleSheet, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import {RCList, RCIcon, RCButton} from 'app/component';
import {assets} from 'app/common/theme';
import {BudgetIconsName} from 'app/common/theme/budgetAssets';
import {ButtonType, RootStackParamList} from 'app/type';
import {ScreenName} from 'app/constants';

const styles = StyleSheet.create({
  iconContainer: {
    flexBasis: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
});

const TransactionIcons = () => {
  const {params} =
    useRoute<RouteProp<RootStackParamList, ScreenName.TRANSACTION_ICONS>>();
  const navigation = useNavigation();

  const onPress = useCallback(
    (item: BudgetIconsName) => {
      params.onCallback(item);
      navigation.goBack();
    },
    [params, navigation],
  );

  const renderItem: ListRenderItem<BudgetIconsName> = useCallback(
    ({item}) => (
      <View style={styles.iconContainer}>
        <RCButton onPress={onPress} callbackData={item} type={ButtonType.CLEAR}>
          <RCIcon
            source={assets.budget[item]}
            size={35}
            container={60}
            type={'circle'}
          />
        </RCButton>
      </View>
    ),
    [onPress],
  );

  return (
    <RCList.FlatList
      data={assets.budgetIcons}
      renderItem={renderItem}
      numColumns={5}
    />
  );
};

export default TransactionIcons;
