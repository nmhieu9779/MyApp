import React, {memo} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {colors} from 'app/common/theme';
import {useAppDimensions} from 'app/hooks';

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.divider,
  },
});

type Props = {
  style?: StyleProp<ViewStyle>;

  size: number;

  width?: number;

  left?: boolean;

  right?: boolean;
};

const Divider = (props: Props) => {
  const {style, size, left, right, width} = props;

  const {windowWidth} = useAppDimensions();

  return (
    <View
      style={StyleSheet.flatten([
        left && {alignItems: 'flex-start'},
        right && {alignItems: 'flex-end'},
      ])}>
      <View
        style={StyleSheet.flatten([
          styles.root,
          style,
          {height: size},
          width
            ? {width: width > 0 ? width : +windowWidth + +width}
            : {width: windowWidth},
        ])}
      />
    </View>
  );
};

Divider.defaultProps = {
  size: 1,
};

export default memo(Divider);
