import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import {RCList, RCText, RCIcon, RCButton, Divider} from 'app/component';
import {assets, colors, FontSize, Styles} from 'app/common/theme';
import {ButtonType, RootStackParamList} from 'app/type';
import {formatCurrency} from 'app/utils';
import {useAppTranslation} from 'app/hooks';
import {LocaleNamespace, ScreenName} from 'app/constants';
import {WalletDto} from 'app/modules/Wallet/dto';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  itemContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imageContainer: {
    width: 80,
    alignItems: 'center',
  },
  walletName: {
    marginBottom: 5,
  },
  checkIcon: {
    marginRight: 10,
  },
  title: {
    marginBottom: 5,
    marginLeft: 15,
    color: colors.grey2,
  },
  newContainer: {
    marginTop: 30,
  },
});

const SelectWallet = () => {
  const translation = useAppTranslation(LocaleNamespace.WALLET);
  const {params} =
    useRoute<RouteProp<RootStackParamList, ScreenName.SELECT_WALLET>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPress = useCallback(
    item => {
      params?.onCallback(item);
      navigation.goBack();
    },
    [params, navigation],
  );

  const onAddNewWallet = useCallback(() => {
    navigation.navigate(ScreenName.ADD_WALLET);
  }, [navigation]);

  const renderItem = useCallback(
    (item: WalletDto) => (
      <React.Fragment>
        <RCButton
          type={ButtonType.CLEAR}
          buttonStyle={styles.itemContainer}
          callbackData={item}
          onPress={onPress}>
          <View style={styles.imageContainer}>
            <RCIcon source={assets.budget[item.icon]} container={50} />
          </View>
          <View style={Styles.flex1}>
            <RCText bold fontSize={FontSize.large} style={styles.walletName}>
              {item.name}
            </RCText>
            <RCText>{formatCurrency(item.amount)}</RCText>
          </View>
          {params?.wallet.key === item.key && (
            <Entypo
              style={styles.checkIcon}
              name={'check'}
              size={FontSize.extraLarge}
              color={colors.primary}
            />
          )}
        </RCButton>
        <Divider width={-80} right size={0.2} />
      </React.Fragment>
    ),
    [params, onPress],
  );

  return (
    <RCList.ScrollView style={styles.container}>
      <RCText style={styles.title}>{translation('SelectWalletTitle')}</RCText>
      <RCList.MapList
        data={[
          {
            name: 'Ví',
            amount: 1000000,
            icon: 'wallet',
            key: 'vi',
          },
          {
            name: 'Credit',
            amount: 1000000,
            icon: 'book',
            key: 'credit',
          },
        ]}
        renderItem={renderItem}
      />
      <RCButton
        buttonStyle={[styles.itemContainer, styles.newContainer]}
        type={ButtonType.CLEAR}
        onPress={onAddNewWallet}>
        <View style={styles.imageContainer}>
          <Ionicons
            name={'add-circle-sharp'}
            size={30}
            color={colors.primary}
          />
        </View>
        <View style={Styles.flex1}>
          <RCText>{translation('AddWallet')}</RCText>
        </View>
      </RCButton>
    </RCList.ScrollView>
  );
};

export default SelectWallet;
