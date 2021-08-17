import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import HorizontalScreen from '../components/HorizontalScreen';
import VerticalContent from '../components/VerticalContent';
import {globalStyle, width} from '../components/styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, Stacks} from '../screen/utils/Interface';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, Stacks.home>;
};

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{alignItems: 'center', marginTop: 20}}
        onPress={() => navigation.navigate('Search')}>
        <Text style={{color: 'white'}}>Search</Text>
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        <View>
          <HorizontalScreen />
        </View>
        <View
          style={{
            position: 'absolute',
            width: width,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={[
                globalStyle.headerTitle,
                {color: 'white', top: 50, position: 'absolute', zIndex: 8},
              ]}>
              {' '}
              Popular Movies
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={[
              globalStyle.headerTitle,
              {color: 'white', position: 'absolute', zIndex: 8, top: -30},
            ]}>
            {' '}
            List Movies
          </Text>
          <ScrollView>
            <VerticalContent from={'Home'} navigation={navigation} />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'black',
  },
  txt: {color: 'black', fontSize: 14},
});
export default Home;
