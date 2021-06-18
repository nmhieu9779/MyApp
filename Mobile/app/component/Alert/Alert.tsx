import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';

import {RCButton} from '../RCButton';
import {RCText} from '../RCText';
import {ButtonColorType, ButtonType} from 'app/type';
import {colors, FontFamily, FontSize} from 'app/common/theme';
import {useAppAlert, useAppSelector} from 'app/hooks';
import {selectAlert} from 'app/common/selectors';

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 10,
  },
  title: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.medium,
    marginBottom: 7,
  },
  message: {
    fontSize: FontSize.small,
    marginBottom: 7,
  },
  groupButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
});

const Alert = () => {
  const [, hideAlert] = useAppAlert();

  const {isVisible, title, message} = useAppSelector(selectAlert);

  const onClose = useCallback(() => {
    hideAlert();
  }, [hideAlert]);

  return (
    <ReactNativeModal isVisible={isVisible} animationOutTiming={500}>
      <View style={style.container}>
        <RCText style={style.title}>{title}</RCText>
        <RCText style={style.message}>{message}</RCText>
        <View style={style.groupButton}>
          <RCButton
            title={'Ok'}
            type={ButtonType.CLEAR}
            colorType={ButtonColorType.BLACK}
            onPress={onClose}
          />
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default Alert;
