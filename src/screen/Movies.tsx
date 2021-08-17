import React, {memo, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  Animated,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {IMoviesData} from '../screen/utils/Interface';

import {useSelector, useDispatch} from 'react-redux';
import {SET_GET_TV_POPULAR} from '../components/redux/action';
import {globalStyle} from '../components/styles';
import {token, PopularTvShowsUrl, imageUrl} from '../config/index';
import axios, {AxiosResponse} from 'axios';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
// export type Props = {
//   navigation: StackNavigationProp<RootStackParamList, Stacks.movie>;
// };
const {height, width} = Dimensions.get('window');
const spacing = 10;
const SIZE = width * 0.62;
const Spacer = (width - SIZE) / 2;
const BACKDROPHEIGHT = height * 0.6;
const Movies: React.FC = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const globalState = useSelector(state => state);
  const listTV: IMoviesData = globalState.tvList;
  console.log(listTV);
  //   const navigation: Props = useNavigation();

  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetchDataMovies();
  }, []);

  const fetchDataMovies = (): void => {
    setLoading(true);
    axios
      .get<IMoviesData[]>(PopularTvShowsUrl + token)
      .then((response: AxiosResponse) =>
        dispatch(SET_GET_TV_POPULAR(response.data.results)),
      )
      .then(() => setLoading(false))
      .catch(error => console.log(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[globalStyle.headerTitle, {color: 'white', top: 60}]}>
        Popular TV
      </Text>
      {isLoading ? (
        <View style={{justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <Animated.FlatList
          style={{top: -20}}
          data={listTV}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{alignItems: 'center'}}
          horizontal
          snapToInterval={SIZE}
          bounces={false}
          scrollEventThrottle={60}
          decelerationRate={0}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
          )}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            if (!item.poster_path) {
              return <View style={{width: Spacer, height: 200}}></View>;
            } else {
              const inputRange = [
                (index - 2) * SIZE,
                (index - 1) * SIZE,
                index * SIZE,
              ];
              const translateY = scrollX.interpolate({
                inputRange,
                outputRange: [0, -50, 0],
              });
              return (
                <View style={{width: SIZE}}>
                  <Animated.View
                    style={{
                      marginHorizontal: spacing - 40,
                      padding: spacing * 9,
                      alignItems: 'center',
                      borderRadius: 34,
                      // backgroundColor: 'white',
                      transform: [{translateY}],
                    }}>
                    <TouchableOpacity
                      onPress={() => Alert.alert('maaf fitur belum tersedia')}>
                      <View style={styles.buttonWrapper}>
                        <Image
                          source={{uri: imageUrl + item.poster_path}}
                          style={{width: SIZE - 70, height: SIZE + 20}}
                        />
                        <View style={{flexDirection: 'row', top: -30}}>
                          <Text style={{color: 'white', fontSize: 16}}>87</Text>
                          <MaterialCommunity
                            name="star"
                            size={18}
                            color={'yellow'}
                          />
                        </View>

                        <Text
                          style={[
                            globalStyle.titleTextName,
                            {textAlign: 'center'},
                          ]}>
                          {' '}
                          {item.original_name}
                        </Text>
                        <View
                          style={{
                            justifyContent: 'center',
                            top: (SIZE + 20) / 5,
                          }}></View>
                      </View>
                    </TouchableOpacity>
                  </Animated.View>
                </View>
              );
            }
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: BACKDROPHEIGHT,
    // backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttonWrapper: {
    width: SIZE - 70,
    height: SIZE + 20,
    borderRadius: 30,
    backgroundColor: 'white',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
export default memo(Movies);
