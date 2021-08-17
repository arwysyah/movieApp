import React from 'react';
import {View} from 'react-native';
import VerticalContent from '../components/VerticalContent';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, Stacks} from '../screen/utils/Interface';
type Props = {
  navigation: StackNavigationProp<RootStackParamList, Stacks.home>;
};

const Search: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <VerticalContent from={'Search'} navigatin={navigation} />
    </View>
  );
};
export default Search;
