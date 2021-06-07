import React, {useCallback} from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';

import {useAppDispatch, useAppSelector} from 'app/hooks';
import {setDataRequest} from 'app/modules/TestConfig/actions';
import {selectData} from 'app/modules/TestConfig/selectors';

const TestConfigScreen = () => {
  const dispatch = useAppDispatch();
  const abc = useAppSelector(selectData);

  const onPress = useCallback(() => {
    dispatch(setDataRequest());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <Pressable onPress={onPress}>
        <Text>{abc || 'clickkk'}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default TestConfigScreen;
