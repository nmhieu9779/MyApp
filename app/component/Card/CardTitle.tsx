import React from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';

import {RCText} from 'app/component';
import {colors, FontSize} from 'app/common/theme';

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.extraMedium,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
});

type Props = {
  style?: StyleProp<TextStyle>;

  children: any;
};

const CardTitle = (props: Props) => {
  const {style, children} = props;

  return (
    <RCText style={StyleSheet.flatten([styles.text, style])}>{children}</RCText>
  );
};

export default CardTitle;
