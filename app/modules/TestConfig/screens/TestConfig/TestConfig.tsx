import React, {useCallback, useLayoutEffect} from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {RCButton} from 'app/component';
import {useAppDispatch, useAppSelector, useAppTranslation} from 'app/hooks';
import {setDataRequest} from 'app/modules/TestConfig/actions';
import {showAlert} from 'app/common/actions';
import {selectData} from 'app/modules/TestConfig/selectors';
import {LocaleNamespace} from 'app/constants/localeNamespace';

const TestConfigScreen = () => {
  const dispatch = useAppDispatch();
  const translate = useAppTranslation(LocaleNamespace.TEST_CONFIG);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: translate('title'),
    });
  }, [navigation, translate]);

  const abc = useAppSelector(selectData);

  const onPress = useCallback(() => {
    dispatch(setDataRequest());
  }, [dispatch]);

  const onOpenAlert = useCallback(() => {
    dispatch(
      showAlert({
        title: 'Test',
        message:
          'a dsad sad asd as das dasmd asmda dmasnd asldnaskdn salkdnsa dnad ksand asndsa kdnsd jnad jasknd asjkdnas djnsa',
      }),
    );
  }, [dispatch]);

  return (
    <SafeAreaView>
      <Pressable onPress={onPress}>
        <Text>{abc || translate('title')}</Text>
        <RCButton title={'Show alert'} onPress={onOpenAlert} />
      </Pressable>
    </SafeAreaView>
  );
};

export default TestConfigScreen;
