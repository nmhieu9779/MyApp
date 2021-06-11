import React from 'react';
import {RCFlatList} from './RCFlatList';
import {RCMapList} from './RCMapList';
import {RCScrollView} from './RCScrollView';

const RCList = () => {
  return <React.Fragment />;
};

RCList.FlatList = RCFlatList;
RCList.MapList = RCMapList;
RCList.ScrollView = RCScrollView;

export default RCList;
