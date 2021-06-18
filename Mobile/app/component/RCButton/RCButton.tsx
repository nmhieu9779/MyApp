import React, {memo, useCallback} from 'react';
import {
  TouchableOpacity,
  StyleProp,
  StyleSheet,
  ViewStyle,
  Platform,
  TextStyle,
  ViewProps,
  AccessibilityProps,
} from 'react-native';

import {RCText} from '../RCText';
import {colors} from 'app/common/theme';
import {ButtonColorType, ButtonType} from 'app/type';
import {ReactNode} from 'react';

const styles = StyleSheet.create({
  defaultButtonStyle: {
    borderRadius: 5,
    padding: 5,
  },
});

type Props = {
  title?: string;

  type: ButtonType;

  colorType: ButtonColorType;

  disabled?: boolean;

  buttonStyle?: StyleProp<ViewStyle>;

  titleStyle?: StyleProp<TextStyle>;

  callbackData?: any;

  onPress: (data: any) => void;

  children?: ReactNode;
};

const RCButton = (
  props: AccessibilityProps & Omit<ViewProps, 'style' | 'hitSlop'> & Props,
) => {
  const {
    title,
    type,
    colorType,
    disabled,
    buttonStyle,
    titleStyle,
    callbackData,
    children,
    onPress,
  } = props;

  const pressableStyle = StyleSheet.flatten([
    styles.defaultButtonStyle,
    {
      backgroundColor:
        type === ButtonType.SOLID
          ? colors.platform[Platform.OS][colorType]
          : colors.transparent,
    },
    disabled &&
      type === ButtonType.SOLID && {
        backgroundColor: colors.disabled,
      },
    type === ButtonType.OUTLINE && {
      borderWidth: 1,
      borderColor: colors.platform[Platform.OS][colorType],
    },
    disabled && {
      borderColor: colors.disabled,
    },
    buttonStyle,
  ]);

  const textStyle = StyleSheet.flatten([
    {
      color:
        type !== ButtonType.SOLID
          ? colors.platform[Platform.OS][colorType]
          : colors.white,
    },
    disabled && {
      color: colors.disabledText,
    },
    titleStyle,
  ]);

  const onCallbackData = useCallback(() => {
    onPress && onPress(callbackData);
  }, [onPress, callbackData]);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={pressableStyle}
      onPress={onCallbackData}>
      {children || <RCText style={textStyle}>{title}</RCText>}
    </TouchableOpacity>
  );
};

RCButton.defaultProps = {
  type: ButtonType.SOLID,
  colorType: ButtonColorType.PRIMARY,
};

export default memo(RCButton);
