import React, {ReactNode, useCallback} from 'react';

type Props = {
  idName: string;

  data: Array<any>;

  renderItem: (item: any, index: number) => ReactNode;
};

const RCMapList = (props: Props): JSX.Element => {
  const {idName, renderItem, data} = props;

  const keyExtractor = useCallback(
    (item, index) => `${item[idName]}-${index}`,
    [idName],
  );

  const map = data.map(
    (item, index): JSX.Element => (
      <React.Fragment key={keyExtractor(item, index)}>
        {renderItem(item, index)}
      </React.Fragment>
    ),
  );

  return <React.Fragment>{map}</React.Fragment>;
};

export default RCMapList;
