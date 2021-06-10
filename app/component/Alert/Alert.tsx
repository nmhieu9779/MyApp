import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';

import {RCButton} from '../RCButton';
import {RCText} from '../RCText';
import {ButtonColorType, ButtonType} from 'app/type';
import {colors, fontFamily, fontSize} from 'app/common/theme';
import {useAppDispatch, useAppSelector} from 'app/hooks';
import {selectAlert} from 'app/common/selectors';
import {hideAlert} from 'app/common/actions';

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 10,
  },
  title: {
    fontFamily: fontFamily.robotoBold,
    fontSize: fontSize.medium,
    marginBottom: 7,
  },
  message: {
    fontSize: fontSize.small,
    marginBottom: 7,
  },
  groupButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
});

const Alert = () => {
  const dispatch = useAppDispatch();

  const {isVisible, title, message} = useAppSelector(selectAlert);

  const onClose = useCallback(() => {
    dispatch(hideAlert());
  }, [dispatch]);

  return (
    <ReactNativeModal
      isVisible={isVisible}
      supportedOrientations={['portrait', 'landscape']}>
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
