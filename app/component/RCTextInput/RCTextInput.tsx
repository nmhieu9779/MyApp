import React, {LegacyRef, memo} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

import {colors, FontFamily, FontSize} from 'app/common/theme';

type Props = {
  bold?: boolean;

  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';

  fontSize?: number;

  fontFamily?: FontFamily;

  width: number;

  color?: string;

  innerRef?: LegacyRef<TextInput>;
};

const RCTextInput = (props: TextInputProps & Props) => {
  const {
    style,
    bold,
    fontWeight,
    fontSize,
    fontFamily,
    color,
    width,
    innerRef,
    ...textInputProps
  } = props;

  return (
    <TextInput
      ref={innerRef}
      style={StyleSheet.flatten([
        {fontSize, fontFamily, color, width},
        bold && {fontWeight: 'bold'},
        fontWeight && {fontWeight},
        style,
      ])}
      {...textInputProps}
    />
  );
};

RCTextInput.defaultProps = {
  fontSize: FontSize.medium,
  fontFamily: FontFamily.robotoRegular,
  colors: colors.black,
  width: '100%',
};

export default memo(RCTextInput);
