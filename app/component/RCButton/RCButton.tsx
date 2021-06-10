import React, {memo} from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
  Platform,
  TextStyle,
} from 'react-native';

import {RCText} from '../RCText';
import {colors} from 'app/common/theme';
import {ButtonColorType, ButtonType} from 'app/type';

const styles = StyleSheet.create({
  defaultButtonStyle: {
    borderRadius: 5,
    padding: 5,
  },
});

type Props = {
  title: string;

  type: ButtonType;

  colorType: ButtonColorType;

  disabled?: boolean;

  buttonStyle?: StyleProp<ViewStyle>;

  titleStyle?: StyleProp<TextStyle>;
};

const RCButton = (props: PressableProps & Props) => {
  const {title, type, colorType, disabled, buttonStyle, titleStyle, onPress} =
    props;

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

  return (
    <Pressable style={pressableStyle} onPress={onPress}>
      <RCText style={textStyle}>{title}</RCText>
    </Pressable>
  );
};

RCButton.defaultProps = {
  type: ButtonType.SOLID,
  colorType: ButtonColorType.PRIMARY,
};

export default memo(RCButton);
