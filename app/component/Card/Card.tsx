import React, {ReactNode} from 'react';
import {Platform, StyleSheet, View, ViewStyle, StyleProp} from 'react-native';

import {colors} from 'app/common/theme';
import CardTitle from './CardTitle';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    marginBottom: 0,
    borderColor: colors.grey5,
    ...Platform.select({
      android: {
        elevation: 1,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: {
          height: 0,
          width: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  wrapper: {
    backgroundColor: 'transparent',
  },
});

type Props = {
  children: ReactNode;

  borderRadius?: number;

  containerStyle?: StyleProp<ViewStyle>;

  wrapperStyle?: StyleProp<ViewStyle>;
};

const Card = (props: Props & ViewStyle) => {
  const {children, borderRadius, containerStyle, wrapperStyle} = props;

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        !!borderRadius && {borderRadius},
        containerStyle && containerStyle,
      ])}>
      <View
        style={StyleSheet.flatten([
          styles.wrapper,
          wrapperStyle && wrapperStyle,
        ])}>
        {children}
      </View>
    </View>
  );
};

Card.Title = CardTitle;

export default Card;
