import React from 'react';
import {View, Text} from 'react-native';
import VerticalContent from '../components/VerticalContent';

const Search: React.FC = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <VerticalContent from={'Search'} />
    </View>
  );
};
export default Search;
