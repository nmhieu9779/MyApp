import React, {memo} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

import {colors, fontFamily, fontSize} from 'app/common/theme';

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: fontFamily.robotoRegular,
    fontSize: fontSize.medium,
    color: colors.black,
  },
});

type Props = {
  children: any;
};

const RCText = (props: TextProps & Props) => {
  const {style, children, ...textProps} = props;

  return (
    <Text style={[styles.defaultStyle, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default memo(RCText);
