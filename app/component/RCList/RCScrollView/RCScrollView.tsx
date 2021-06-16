import React, {memo} from 'react';
import {ReactNode} from 'react';
import {ScrollView, ScrollViewProps} from 'react-native';

type Props = {
  children: ReactNode;
};

const RCScrollView = (props: ScrollViewProps & Props) => {
  const {children, ...scrollViewProps} = props;

  return <ScrollView {...scrollViewProps}>{children}</ScrollView>;
};

export default memo(RCScrollView);
