import React, {useCallback, useLayoutEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

import {assets, colors, FontSize, Styles} from 'app/common/theme';
import {BudgetIconsName} from 'app/common/theme/budgetAssets';
import {
  RCButton,
  RCList,
  RCIcon,
  RCTextInput,
  Divider,
  RCText,
} from 'app/component';
import {LocaleNamespace, ScreenName} from 'app/constants';
import {useAppTranslation} from 'app/hooks';
import {ButtonType, RootStackParamList} from 'app/type';

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    backgroundColor: colors.white,
    paddingLeft: 10,
    borderColor: colors.divider,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
  },
  walletNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRightColor: colors.divider,
    borderRightWidth: 0.5,
    borderRadius: 0,
  },
  input: {
    flex: 1,
    marginHorizontal: 7,
  },
  buttonSave: {
    marginRight: 5,
  },
  amountContainer: {
    marginVertical: 10,
  },
});

const AddWallet = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const translate = useAppTranslation(LocaleNamespace.WALLET);

  const [icon, setIcon] = useState<BudgetIconsName>('wallet');
  const [walletName, setWalletName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const onSave = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <RCButton
          buttonStyle={styles.buttonSave}
          type={ButtonType.CLEAR}
          onPress={onSave}>
          <Foundation name={'save'} size={30} color={colors.primary} />
        </RCButton>
      ),
    });
  }, [navigation, onSave]);

  const onSelectIcon = useCallback(() => {
    navigation.navigate(ScreenName.TRANSACTION_ICONS, {
      onCallback: item => {
        setIcon(item);
      },
    });
  }, [navigation]);

  const onChangeText = useCallback(text => {
    setWalletName(text);
  }, []);

  const onChangeAmount = useCallback(text => {
    setAmount(text);
  }, []);

  return (
    <RCList.ScrollView contentContainerStyle={Styles.flex1}>
      <View style={styles.container}>
        <View style={styles.walletNameContainer}>
          <RCButton
            type={ButtonType.CLEAR}
            buttonStyle={styles.button}
            onPress={onSelectIcon}>
            <RCIcon source={assets.budget[icon]} container={50} />
            <Ionicons name={'caret-down'} />
          </RCButton>
          <RCTextInput
            fontSize={FontSize.extraBig}
            style={styles.input}
            placeholder={translate('WalletName')}
            value={walletName}
            onChangeText={onChangeText}
          />
        </View>
        <Divider size={0.5} />
        <View style={styles.amountContainer}>
          <RCText color={colors.grey3} fontSize={FontSize.small}>
            {translate('InitialBalance')}
          </RCText>
          <RCTextInput
            placeholder={'0'}
            fontSize={FontSize.big}
            keyboardType={'number-pad'}
            onChangeText={onChangeAmount}
            value={amount}
          />
        </View>
      </View>
    </RCList.ScrollView>
  );
};

export default AddWallet;
