import React, {memo} from 'react';
import {
  ImageProps,
  Image,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type Props = {
  size?: number;

  container: number;

  containerStyle?: StyleProp<ViewStyle>;

  type?: 'circle';
};

const RCIcon = (props: ImageProps & Props) => {
  const {size, container, type, containerStyle, ...imageProps} = props;

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        {width: container, height: container},
        type === 'circle' && {borderRadius: container / 2},
        containerStyle && containerStyle,
      ])}>
      <Image
        {...imageProps}
        style={StyleSheet.flatten([
          {width: size || container - 10, height: size || container - 10},
        ])}
      />
    </View>
  );
};

export default memo(RCIcon);
