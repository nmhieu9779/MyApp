import React, {memo, useCallback} from 'react';
import {FlatList, FlatListProps} from 'react-native';

import {Divider} from 'app/component/Divider';

type Props = {
  idName?: string;

  divider?: boolean;
};

const RCFlatList = (props: FlatListProps<any> & Props) => {
  const {idName, divider, ...flatListProps} = props;

  const keyExtractor = useCallback(
    (item, index) => `${item[`${idName}`] || item}-${index}`,
    [idName],
  );

  const ItemSeparatorComponent = useCallback(() => <Divider size={0.5} />, []);

  return (
    <FlatList
      ItemSeparatorComponent={divider ? ItemSeparatorComponent : undefined}
      {...flatListProps}
      keyExtractor={keyExtractor}
    />
  );
};

export default memo(RCFlatList);
