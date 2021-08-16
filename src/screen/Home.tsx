import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios, {AxiosResponse} from 'axios';
import {token, baseUrl} from '../config/index';
import {IStateData} from './utils/Interface';

// const {width, height}: any | any = Dimensions.get('screen');

const Home: React.FC = () => {
  const [data, setData] = useState<IStateData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetchDataMovies();
  }, []);

  const fetchDataMovies = (): void => {
    setLoading(true);
    axios
      .get<IStateData[]>(baseUrl + token)
      .then((response: AxiosResponse) => setData(response.data.results))
      .then(() => setLoading(false));
  };

  const renderItem = ({item}: {item: IStateData}) => {
    return <Text style={styles.txt}>{item.overview}ss</Text>;
  };
  return (
    <View style={styles.container}>
      {!isLoading ? (
        <FlatList
          // scrollEventThrottle={16}
          data={data}
          //   initialNumToRender={7}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          contentContainerStyle={{alignItems: 'center'}}
        />
      ) : (
        <ActivityIndicator size="large" color="red" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {color: 'black', fontSize: 14},
});
export default Home;
