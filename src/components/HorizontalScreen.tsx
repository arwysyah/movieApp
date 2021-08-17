import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {
  globalStyle,
  width,
  ITEM_HEIGHT,
  ITEM_WIDTH,
  height,
  HEIGHT,
  FONTS,
} from './styles';

import {token, popularMoviesUrl, imageUrl} from '../config/index';
import axios, {AxiosResponse} from 'axios';
import {IStateData} from '../screen/utils/Interface';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, Stacks} from '../screen/utils/Interface';
import {useNavigation} from '@react-navigation/native';
export type Props = {
  navigation: StackNavigationProp<RootStackParamList, Stacks.home>;
};

// import {useSelector} from 'react-redux';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

const HorizontalScreen: React.FC = () => {
  const navigation: Props = useNavigation();
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

  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({item, index}: {item: IStateData; index: number}) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];
    const translateX = scrollX.interpolate({
      inputRange,
      outputRange: [-width * 0.7, 0, width * 0.7],
    });
    return (
      <View>
        <View style={styles.containerImage}>
          <View style={styles.wrapperView}>
            <TouchableOpacity
              style={styles.secondWrapper}
              onPress={() =>
                navigation.navigate('Details', {
                  item: item,
                })
              }>
              {item.poster_path === undefined ? (
                <View>
                  <Text style={styles.txtHorizontal}>
                    {/* {item.fullName.charAt(0)} */}
                  </Text>
                </View>
              ) : (
                <Animated.Image
                  source={{uri: imageUrl + item.poster_path}}
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    borderRadius: 14,
                    transform: [
                      {
                        translateX,
                      },
                    ],
                  }}
                  resizeMode="cover"
                />
              )}
            </TouchableOpacity>
          </View>

          <Image
            source={{uri: imageUrl + item.poster_path}}
            style={styles.img}
            resizeMode="cover"
          />
          <Text style={[styles.fullname]}>
            {item.original_title}
            {/* fullName */}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={globalStyle.container}>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <AnimatedFlatlist
          data={data}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{alignItems: 'center'}}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {useNativeDriver: true},
          )}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  containerImage: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 1.8,
    backgroundColor: 'black',
  },
  wrapperView: {
    borderRadius: 18,
    borderWidth: 7,
    shadowColor: '#000',
    shadowRadius: 30,
    shadowOpacity: 1,

    backgroundColor: 'black',
    borderColor: 'grey',
  },
  secondWrapper: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    overflow: 'hidden',
    alignItems: 'center',
    // backgroundColor: '#FFFFFF',
  },
  txtHorizontal: {
    fontSize: 140,
    color: 'black',
    position: 'absolute',
    textAlign: 'center',
    left: -40,
    top: 5,
  },
  thirdWrapper: {
    width: 60,
    height: 60,
    // top:60,
    borderRadius: 60,
    position: 'absolute',
    bottom: HEIGHT - 90,
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
  },
  fullname: {
    fontSize: 19,
    color: 'white',
    position: 'absolute',
    textAlign: 'center',
    fontFamily: FONTS,

    bottom: HEIGHT - 150,
  },
  img: {
    width: 60,
    height: 60,
    // bottom,
    borderRadius: 60,
    position: 'absolute',
    bottom: HEIGHT - 90,
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },
  loading: {flex: 1, height, width, justifyContent: 'center'},
});

export default HorizontalScreen;
