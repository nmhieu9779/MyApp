import React, {useCallback} from 'react';
import {Pressable, SafeAreaView, StyleSheet} from 'react-native';

import {RCButton, RCText} from 'app/component';
import {
  useAppAlert,
  useAppDispatch,
  useAppSelector,
  useAppTranslation,
} from 'app/hooks';
import {setDataRequest, TestConfigAction} from 'app/modules/TestConfig/actions';
import {selectData} from 'app/modules/TestConfig/selectors';
import {LocaleNamespace} from 'app/constants';
import {selectLoadingStatus} from 'app/common/selectors';
import {setAppLanguage} from 'app/common/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const TestConfigScreen = () => {
  const dispatch = useAppDispatch();
  const translate = useAppTranslation(LocaleNamespace.TEST_CONFIG);

  const abc = useAppSelector(selectData);
  const loading = useAppSelector(
    selectLoadingStatus([TestConfigAction.SetDataRequest]),
  );
  const [showAlert] = useAppAlert();

  const onPress = useCallback(() => {
    dispatch(setDataRequest());
  }, [dispatch]);

  const onOpenAlert = useCallback(() => {
    showAlert(
      'ad nasmdnas mdnsamdnas mdnas dmasnd samnd asmdnsa dmnas',
      'Test',
    );
  }, [showAlert]);

  const onChangeLng = useCallback(
    lng => {
      dispatch(setAppLanguage(lng));
    },
    [dispatch],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={onPress}>
        <RCText>{loading ? 'loading' : abc || translate('title')}</RCText>
        <RCButton title={'Show alert'} onPress={onOpenAlert} />
        <RCButton
          title={'Tiếng việt'}
          onPress={onChangeLng}
          callbackData={'vi'}
        />
        <RCButton title={'English'} onPress={onChangeLng} callbackData={'en'} />
      </Pressable>
    </SafeAreaView>
  );
};

export default TestConfigScreen;
