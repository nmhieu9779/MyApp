import React, {useCallback} from 'react';
import {Pressable, SafeAreaView} from 'react-native';

import {RCButton, RCText} from 'app/component';
import {
  useAppAlert,
  useAppDispatch,
  useAppSelector,
  useAppTranslation,
} from 'app/hooks';
import {setDataRequest, TestConfigAction} from 'app/modules/TestConfig/actions';
import {selectData} from 'app/modules/TestConfig/selectors';
import {LocaleNamespace} from 'app/constants/localeNamespace';
import {selectLoadingStatus} from 'app/common/selectors';

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

  return (
    <SafeAreaView>
      <Pressable onPress={onPress}>
        <RCText>{loading ? 'loading' : abc || translate('title')}</RCText>
        <RCButton title={'Show alert'} onPress={onOpenAlert} />
      </Pressable>
    </SafeAreaView>
  );
};

export default TestConfigScreen;
