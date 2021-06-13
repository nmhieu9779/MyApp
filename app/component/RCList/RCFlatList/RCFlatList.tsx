import React, {useCallback} from 'react';
import {FlatList, FlatListProps} from 'react-native';

type Props = {
  idName?: string;
};

const RCFlatList = (props: FlatListProps<any> & Props) => {
  const {idName, ...flatListProps} = props;

  const keyExtractor = useCallback(
    (item, index) => `${item[`${idName}`] || item}-${index}`,
    [idName],
  );

  return <FlatList {...flatListProps} keyExtractor={keyExtractor} />;
};

export default RCFlatList;
