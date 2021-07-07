import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  memo,
} from 'react';
import {
  View,
  Animated,
  LayoutChangeEvent,
  StyleSheet,
  StyleProp,
  ViewProps,
} from 'react-native';

import {RCButton, RCText, RCList} from 'app/component';
import {ButtonType, GroupButtonItem} from 'app/type';
import {colors, Styles} from 'app/common/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grey5,
    borderRadius: 5,
  },
  buttonContainer: {
    paddingVertical: 10,
  },
  selectedContainer: {
    backgroundColor: colors.white,
    zIndex: -1,
    position: 'absolute',
    borderRadius: 5,
    margin: 5,
  },
});

type Props = {
  data: Array<GroupButtonItem<string>>;

  selected: GroupButtonItem<string>;

  widthContainer: number;

  selectedMargin?: number;

  containerStyle?: StyleProp<ViewProps>;

  selectedStyle?: StyleProp<ViewProps>;

  onChange: (item: GroupButtonItem<string>) => void;
};

const GroupButton = (props: Props) => {
  const {
    data,
    selected,
    widthContainer,
    selectedMargin,
    containerStyle,
    selectedStyle,
    onChange,
  } = props;
  const left = useRef(new Animated.Value(0)).current;

  const [heightContainer, setHeightContainer] = useState<number>(0);

  const width = useMemo(
    () => widthContainer / (data.length || 1),
    [widthContainer, data],
  );
  const currentIndex = useMemo(
    () => data.findIndex(({key}) => key === selected.key),
    [data, selected],
  );

  useEffect(() => {
    Animated.timing(left, {
      toValue: width * currentIndex,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [currentIndex, width, left]);

  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: {height: heightView},
      },
    }: LayoutChangeEvent) => {
      setHeightContainer(heightView);
    },
    [],
  );

  const onPress = useCallback(
    item => {
      onChange(item);
    },
    [onChange],
  );

  const renderItem = useCallback(
    (item: GroupButtonItem<string>) => (
      <RCButton
        type={ButtonType.CLEAR}
        buttonStyle={StyleSheet.flatten([
          styles.buttonContainer,
          Styles.flex1,
          Styles.center,
        ])}
        callbackData={item}
        onPress={onPress}>
        <RCText bold={selected.key === item.key}>{item.title}</RCText>
      </RCButton>
    ),
    [selected, onPress],
  );

  return (
    <View
      onLayout={onLayout}
      style={StyleSheet.flatten([
        styles.container,
        {width: widthContainer},
        containerStyle && containerStyle,
      ])}>
      <RCList.MapList data={data} idName={'key'} renderItem={renderItem} />
      <Animated.View
        style={StyleSheet.flatten([
          styles.selectedContainer,
          {left},
          {
            height:
              heightContainer - (selectedMargin ? selectedMargin * 2 : 10),
          },
          {width: width - (selectedMargin ? selectedMargin * 2 : 10)},
          !!selectedMargin && {margin: selectedMargin},
          selectedStyle && selectedStyle,
        ])}
      />
    </View>
  );
};

export default memo(GroupButton);
