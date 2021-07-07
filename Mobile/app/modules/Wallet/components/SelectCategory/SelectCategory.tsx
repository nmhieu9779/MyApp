import React, {useCallback, useState} from 'react';
import {View, StyleSheet, ListRenderItem} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  GroupButton,
  Divider,
  RCList,
  RCButton,
  RCIcon,
  RCText,
} from 'app/component';
import {ButtonType, GroupButtonItem, RootStackParamList} from 'app/type';
import {assets, colors, Styles} from 'app/common/theme';
import {useAppDimensions, useAppSelector, useAppTranslation} from 'app/hooks';
import {categoryType} from 'app/modules/Wallet/constants';
import {LocaleNamespace, ScreenName} from 'app/constants';
import {CategoryDto, CategoryTypeDto} from '../../dto';
import {selectCategories} from '../../selectors';

const styles = StyleSheet.create({
  typeContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 5,
  },
  groupButton: {
    width: '50%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 75,
    alignItems: 'center',
  },
});

const SelectCategory = () => {
  const {windowWidth} = useAppDimensions();
  const {params} =
    useRoute<RouteProp<RootStackParamList, ScreenName.SELECT_CATEGORY>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const translate = useAppTranslation(LocaleNamespace.WALLET);

  const [selected, setSelected] = useState<GroupButtonItem<CategoryTypeDto>>(
    categoryType[0],
  );

  const categories = useAppSelector(selectCategories(selected.key));

  const onChange = useCallback(item => {
    setSelected(item);
  }, []);

  const onPress = useCallback(
    data => {
      params?.onCallback(data);
      navigation.goBack();
    },
    [params, navigation],
  );

  const renderItem: ListRenderItem<CategoryDto> = useCallback(
    ({item, index}) => (
      <React.Fragment>
        <RCButton
          buttonStyle={styles.itemContainer}
          type={ButtonType.CLEAR}
          callbackData={item}
          onPress={onPress}>
          <View style={styles.imageContainer}>
            <RCIcon
              source={assets.budget[item.icon]}
              container={50}
              size={40}
            />
          </View>
          <RCText style={Styles.flex1}>{item.name}</RCText>
        </RCButton>
        <Divider size={0.5} width={index === 1 ? undefined : -80} right />
      </React.Fragment>
    ),
    [onPress],
  );

  const onAddNewCategory = useCallback(() => {
    navigation.navigate(ScreenName.ADD_CATEGORY, {categoryType: selected});
  }, [navigation, selected]);

  const ListFooterComponent = useCallback(
    () => (
      <React.Fragment>
        <RCButton
          buttonStyle={styles.itemContainer}
          type={ButtonType.CLEAR}
          onPress={onAddNewCategory}>
          <View style={styles.imageContainer}>
            <Ionicons
              name={'add-circle-sharp'}
              size={30}
              color={colors.primary}
            />
          </View>
          <RCText color={colors.primary} style={Styles.flex1}>
            {translate('NewCategory')}
          </RCText>
        </RCButton>
        <Divider />
      </React.Fragment>
    ),
    [onAddNewCategory, translate],
  );

  return (
    <View style={Styles.flex1}>
      <View style={styles.typeContainer}>
        <GroupButton
          data={categoryType}
          widthContainer={windowWidth / 2}
          selected={selected}
          onChange={onChange}
        />
      </View>
      <Divider />
      <RCList.FlatList
        contentContainerStyle={{backgroundColor: colors.white}}
        data={categories}
        idName={'id'}
        renderItem={renderItem}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};

export default SelectCategory;
