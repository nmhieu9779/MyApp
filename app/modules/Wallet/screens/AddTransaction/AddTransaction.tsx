import React, {useRef, useCallback, useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {
  RCList,
  RCTextInput,
  RCText,
  RCButton,
  RCIcon,
  Divider,
} from 'app/component';
import {assets, colors, FontSize, Styles} from 'app/common/theme';
import {ButtonType, RootStackParamList} from 'app/type';
import {useAppTranslation} from 'app/hooks';
import {LocaleNamespace, ScreenName} from 'app/constants';
import {BudgetIconsName} from 'app/common/theme/budgetAssets';

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    backgroundColor: colors.white,
  },
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  unitContainer: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unitText: {
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: colors.grey3,
    padding: 5,
  },
  amountInput: {
    marginVertical: 10,
  },
  imageContainer: {
    width: 75,
    alignItems: 'center',
  },
});

const AddTransaction = () => {
  const amountInput = useRef() as React.MutableRefObject<TextInput>;
  const translate = useAppTranslation(LocaleNamespace.WALLET);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [note, setNote] = useState<string>('');
  const [category, setCategory] = useState<{
    icon: BudgetIconsName;
    title: string;
    key: string;
  }>({key: '', title: '', icon: 'wallet'});

  const onAmountPress = useCallback(() => {
    amountInput.current.focus();
  }, []);

  const onSelectCategory = useCallback(() => {
    navigation.navigate(ScreenName.SELECT_CATEGORY, {
      onCallback: data => setCategory(data),
    });
  }, [navigation]);

  const onNavigateNote = useCallback(() => {
    navigation.navigate(ScreenName.NOTE, {
      note,
      onCallback: text => setNote(text),
    });
  }, [navigation, note]);

  return (
    <RCList.ScrollView>
      <View style={styles.container}>
        <Divider size={0.5} />
        <View style={styles.groupContainer}>
          <View style={styles.unitContainer}>
            <RCText style={styles.unitText} bold color={colors.grey3}>
              {'VND'}
            </RCText>
          </View>
          <RCButton
            buttonStyle={[Styles.padding0, Styles.flex1]}
            type={ButtonType.CLEAR}
            onPress={onAmountPress}>
            <RCText color={colors.grey2} fontSize={FontSize.small}>
              {translate('AmountTitle')}
            </RCText>
            <RCTextInput
              innerRef={amountInput}
              fontSize={FontSize.extraBig}
              bold
              keyboardType={'numeric'}
              style={styles.amountInput}
              maxLength={18}
            />
            <RCText color={colors.grey1}> </RCText>
          </RCButton>
        </View>
        <Divider size={0.5} width={-80} right />
        <RCButton
          buttonStyle={styles.groupContainer}
          type={ButtonType.CLEAR}
          onPress={onSelectCategory}>
          <View style={styles.imageContainer}>
            <RCIcon
              source={assets.budget[category.icon]}
              container={50}
              size={40}
            />
          </View>
          <RCText
            style={Styles.flex1}
            fontSize={FontSize.big}
            placeholder={translate('SelectCategoryTitle')}>
            {category.title}
          </RCText>
          <FeatherIcon
            name={'chevron-right'}
            size={FontSize.large}
            color={colors.grey3}
          />
        </RCButton>
        <Divider size={0.5} width={-80} right />
        <RCButton
          buttonStyle={styles.groupContainer}
          type={ButtonType.CLEAR}
          onPress={onNavigateNote}>
          <View style={styles.imageContainer}>
            <MaterialCommunityIconsIcon
              name={'text'}
              size={FontSize.big}
              color={colors.grey3}
            />
          </View>
          <RCText style={Styles.flex1} placeholder={translate('NoteTitle')}>
            {note}
          </RCText>
          <FeatherIcon
            name={'chevron-right'}
            size={FontSize.large}
            color={colors.grey3}
          />
        </RCButton>
        <Divider size={0.5} width={-80} right />
        <RCButton
          buttonStyle={styles.groupContainer}
          type={ButtonType.CLEAR}
          onPress={() => {}}>
          <View style={styles.imageContainer}>
            <MaterialCommunityIconsIcon
              name={'calendar'}
              size={FontSize.big}
              color={colors.grey3}
            />
          </View>
          <RCText style={Styles.flex1}>
            {moment().format('ddd, DD MMM YYYY')}
          </RCText>
          <FeatherIcon
            name={'chevron-right'}
            size={FontSize.large}
            color={colors.grey3}
          />
        </RCButton>
        <Divider size={0.5} width={-80} right />
        <RCButton
          buttonStyle={styles.groupContainer}
          type={ButtonType.CLEAR}
          onPress={() => {}}>
          <View style={styles.imageContainer}>
            <RCIcon source={assets.budget.wallet} container={20} size={20} />
          </View>
          <RCText style={Styles.flex1}>{'Ví'}</RCText>
          <FeatherIcon
            name={'chevron-right'}
            size={FontSize.large}
            color={colors.grey3}
          />
        </RCButton>
        <Divider size={0.5} />
      </View>
    </RCList.ScrollView>
  );
};

export default AddTransaction;
