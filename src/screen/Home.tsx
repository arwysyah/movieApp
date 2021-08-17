import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import axios, {AxiosResponse} from 'axios';
import {token, popularMoviesUrl} from '../config/index';
import {IStateData} from './utils/Interface';
import HorizontalScreen from '../components/HorizontalScreen';
import VerticalContent from '../components/VerticalContent';

import {RootStackParamList, Stacks} from '../screen/utils/Interface';
export type Props = {
  navigation: StackNavigationProp<RootStackParamList, Stacks.home>;
};

const Home: React.FC = () => {
  const [data, setData] = useState<IStateData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetchDataMovies();
  }, []);

  const fetchDataMovies = (): void => {
    setLoading(true);
    axios
      .get<IStateData[]>(popularMoviesUrl + token)
      .then((response: AxiosResponse) => setData(response.data.results))
      .then(() => setLoading(false));
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <HorizontalScreen />
      </View>
      <View>
        <ScrollView>
          <VerticalContent />
        </ScrollView>
      </View>
    </ScrollView>
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
