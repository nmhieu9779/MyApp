import React, {memo} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

import {colors, FontFamily, FontSize} from 'app/common/theme';

type Props = {
  children: any;

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

  color?: string;
};

const RCText = (props: TextProps & Props) => {
  const {
    style,
    children,
    bold,
    fontWeight,
    fontSize,
    fontFamily,
    color,
    ...textProps
  } = props;

  return (
    <Text
      style={StyleSheet.flatten([
        {fontSize, fontFamily, color},
        bold && {fontWeight: 'bold'},
        fontWeight && {fontWeight},
        style,
      ])}
      {...textProps}>
      {children}
    </Text>
  );
};

RCText.defaultProps = {
  fontSize: FontSize.medium,
  fontFamily: FontFamily.robotoRegular,
  colors: colors.black,
};

export default memo(RCText);
