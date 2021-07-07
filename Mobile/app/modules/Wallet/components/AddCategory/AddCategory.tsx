import React, {useCallback, useLayoutEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

import {assets, colors, FontSize, Styles} from 'app/common/theme';
import {
  RCList,
  RCTextInput,
  RCIcon,
  RCText,
  Divider,
  GroupButton,
  RCButton,
} from 'app/component';
import {categoryType} from 'app/modules/Wallet/constants';
import {ButtonType, GroupButtonItem, RootStackParamList} from 'app/type';
import {LocaleNamespace, ScreenName} from 'app/constants';
import {BudgetIconsName} from 'app/common/theme/budgetAssets';
import {useAppDispatch, useAppTranslation} from 'app/hooks';
import {CategoryTypeDto} from '../../dto';
import {createCategoryRequest} from '../../actions';

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    backgroundColor: colors.white,
    paddingLeft: 10,
    borderColor: colors.divider,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
  },
  categoryNameContainer: {
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
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginRight: 20,
    alignItems: 'center',
  },
  buttonSave: {
    marginRight: 5,
  },
});

const AddCategory = () => {
  const {params} =
    useRoute<RouteProp<RootStackParamList, ScreenName.ADD_CATEGORY>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const translate = useAppTranslation(LocaleNamespace.WALLET);
  const dispatch = useAppDispatch();

  const [selected, setSelected] = useState<GroupButtonItem<CategoryTypeDto>>(
    params?.categoryType,
  );
  const [icon, setIcon] = useState<BudgetIconsName>('wallet');
  const [categoryName, setCategoryName] = useState<string>('');

  const onSave = useCallback(() => {
    dispatch(
      createCategoryRequest({name: categoryName, icon, type: selected.key}),
    );
    navigation.goBack();
  }, [navigation, categoryName, icon, selected, dispatch]);

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

  const onChange = useCallback(item => {
    setSelected(item);
  }, []);

  const onSelectIcon = useCallback(() => {
    navigation.navigate(ScreenName.TRANSACTION_ICONS, {
      onCallback: item => {
        setIcon(item);
      },
    });
  }, [navigation]);

  const onChangeText = useCallback(text => {
    setCategoryName(text);
  }, []);

  return (
    <RCList.ScrollView contentContainerStyle={Styles.flex1}>
      <View style={styles.container}>
        <View style={styles.categoryNameContainer}>
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
            placeholder={translate('CategoryName')}
            value={categoryName}
            onChangeText={onChangeText}
          />
        </View>
        <Divider size={0.5} />
        <View style={styles.typeContainer}>
          <RCText fontSize={FontSize.large}>{`${translate(
            'Expense/Income',
          )}:`}</RCText>
          <GroupButton
            data={categoryType}
            selected={selected}
            onChange={onChange}
            widthContainer={160}
          />
        </View>
      </View>
    </RCList.ScrollView>
  );
};

export default AddCategory;
