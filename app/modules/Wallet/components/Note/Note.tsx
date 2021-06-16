import React, {useCallback, useLayoutEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';

import {RCTextInput, RCList, RCText, RCButton} from 'app/component';
import {colors, FontSize} from 'app/common/theme';
import {ButtonType, RootStackParamList} from 'app/type';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {LocaleNamespace, ScreenName} from 'app/constants';
import {useAppTranslation} from 'app/hooks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  input: {
    padding: 5,
    fontSize: FontSize.extraLarge,
    marginVertical: 10,
  },
  titleContainer: {
    backgroundColor: colors.greyOutline,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  note: {
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: FontSize.large,
  },
  buttonSave: {
    marginRight: 5,
  },
});

const Note = () => {
  const translate = useAppTranslation(LocaleNamespace.WALLET);
  const {params} = useRoute<RouteProp<RootStackParamList, ScreenName.NOTE>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [note, setNote] = useState<string>(params?.note);

  const onSave = useCallback(
    text => {
      params.onCallback(text);
      navigation?.goBack();
    },
    [navigation, params],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <RCButton
          buttonStyle={styles.buttonSave}
          callbackData={note}
          type={ButtonType.CLEAR}
          onPress={onSave}>
          <Foundation name={'save'} size={30} color={colors.primary} />
        </RCButton>
      ),
    });
  }, [navigation, note, onSave]);

  const renderItem = useCallback(
    ({item}) => (
      <RCButton type={ButtonType.CLEAR} callbackData={item} onPress={onSave}>
        <RCText style={styles.note} numberOfLines={2}>
          {item}
        </RCText>
      </RCButton>
    ),
    [onSave],
  );

  const onChangeText = useCallback(text => setNote(text), []);

  return (
    <View style={styles.container}>
      <RCTextInput
        style={styles.input}
        fontSize={FontSize.extraMedium}
        multiline={true}
        autoFocus={true}
        value={note}
        onChangeText={onChangeText}
        placeholder={translate('EnterNote')}
      />
      <View style={styles.titleContainer}>
        <RCText bold>{translate('Suggestion')}</RCText>
      </View>
      <RCList.FlatList
        divider
        data={[
          'abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc ',
          'xyz',
        ]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Note;
