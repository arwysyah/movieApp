import React, {memo, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  ToastAndroid,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle, width} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {token, baseUrl, imageUrl} from '../config/index';
import axios, {AxiosResponse} from 'axios';
import {RootStackParamList, Stacks} from '../screen/utils/Interface';
import {IStateData} from '../screen/utils/Interface';
import {useNavigation} from '@react-navigation/native';

const spacing: number = 12;
const SIZE: number = width * 0.62;
const HEIGHT: number = SIZE - 90;
export interface Props {
  navigation: StackNavigationProp<RootStackParamList, Stacks.home>;
}
export interface PropState {
  navigation: StackNavigationProp<RootStackParamList, Stacks.home>;
}

const VerticalContent: React.FC = ({from}: PropState) => {
  const [data, setData] = useState<IStateData[]>([]);
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [rate, setRate] = useState<Number>(0);
  const [isModal, setModalVisible] = useState<Boolean>(false);
  const [id, setId] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const navigation: Props = useNavigation();

  useEffect(() => {
    fetchDataMovies();
  }, []);
  const handleSubmit = () => {
    console.log(id, 'id');
    if (rate > 0) {
      axios
        .post<IStateData[]>(
          `https://api.themoviedb.org/3/movie/${id}/rating?api_key=` + token,
        )
        .then((response: AxiosResponse) => setData(response.data.results))
        .then(() => setLoading(false))
        .catch(err => ToastAndroid.show(err.message, ToastAndroid.SHORT));
      setRate(0);
    }

    setModalVisible(false);
  };
  const fetchDataMovies = (): void => {
    setLoading(true);
    axios
      .get<IStateData[]>(baseUrl + token)
      .then((response: AxiosResponse) => setData(response.data.results))
      .then(() => setLoading(false));
  };

  async function handleRate(value) {
    try {
      setId(value);
      setModalVisible(true);
      //   setDataArchived([value, ...dataArchived]);
      //   await AsyncStorage.setItem('PIN', JSON.stringify([...dataArchived]));
    } catch (e) {
      console.log(e);
    }
  }
  const filterData: IStateData[] = data.filter(item => {
    return item.original_title.toLowerCase().indexOf(text.toLowerCase()) !== -1;
  });

  // const renderStar = item => {
  //   const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //   return number.map((i, d) => {
  //     return (
  //       <View style={{flexDirection: 'row'}} key={d}>
  //         <MaterialCommunity
  //           name={'star'}
  //           color={number[d] <= item ? '#EE6492' : '#EEEEFF'}
  //           size={16}
  //           style={{flexDirection: 'row', paddingLeft: 5}}
  //         />
  //       </View>
  //     );
  //   });
  // };

  let stars = [];
  // Loop 5 times
  for (let i = 1; i <= 10; i++) {
    // set the path to filled stars
    stars.push(
      <TouchableWithoutFeedback
        key={i}
        onPress={() => {
          rateDriver(i);
        }}>
        <Animated.View>
          <Stars filled={i <= rate ? true : false} />
        </Animated.View>
      </TouchableWithoutFeedback>,
    );
  }

  const rateDriver = star => {
    setRate(star);
  };

  return (
    <SafeAreaView>
      {from == 'Search' && (
        <TextInput
          keyboardType="default"
          style={styles.textInputContact}
          placeholder="Search..."
          value={text}
          onChangeText={txt => setText(txt)}
        />
      )}
      <Modal
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
        }}
        isVisible={isModal}
        onBackButtonPress={() => setModalVisible(false)}>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: '#fff',
            padding: 20,
            paddingHorizontal: 30,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View style={styles.starsItem}>{stars}</View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSubmit()}>
            <Text style={{color: 'white'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <FlatList
        data={filterData}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}
        bounces={false}
        scrollEventThrottle={60}
        decelerationRate={0}
        renderItem={({item}: any) => {
          return (
            <View style={{height: HEIGHT + 3, width: width}}>
              {!isLoading ? (
                <View style={globalStyle.cardContainer}>
                  <View
                    style={{
                      padding: spacing,
                      paddingRight: 50,
                      paddingLeft: 34,
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Details', {
                          item: item,
                        })
                      }>
                      <Text style={{color: 'white'}}>
                        {item.original_title}
                      </Text>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          top: 10,
                          fontFamily: 'SansitaSwashed-Light',
                        }}
                        numberOfLines={1}>
                        {item.original_title}
                      </Text>
                    </TouchableOpacity>

                    <View style={{width: HEIGHT * 1.8}}></View>

                    <View style={{top: spacing * 3}}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Details', {
                            item: item,
                          })
                        }>
                        <Text style={{color: 'white'}} numberOfLines={1}>
                          {item.overview}
                        </Text>
                        <Text style={{color: 'white', fontSize: 10}}>
                          {/* {moment(item.createdAt).format('LL')} */}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{alignItems: 'center', top: 20, left: -20}}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Details', {
                          item: item,
                        })
                      }>
                      <Image
                        source={
                          item.poster_path === null
                            ? require('../assets/logo.png')
                            : {uri: imageUrl + item.poster_path}
                        }
                        style={{height: 100, width: 60, borderRadius: 6}}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        width: 90,
                        top: 6,
                      }}>
                      <TouchableOpacity onPress={() => handleRate(item.id)}>
                        <Text
                          style={{
                            color: 'white',
                            textAlign: 'center',
                            left: -16,
                          }}>
                          Rate
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ) : (
                <View>
                  <ActivityIndicator size="small" color="red" />
                </View>
              )}
            </View>
          );
        }}
      />

      {/* ) : (
        <ActivityIndicator size="small" color="red" />
      )} */}
      {/* <View style={{height: 40}} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentStarRate: {
    marginLeft: 145,
    top: -110,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  starsItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  horizontalStar: {
    height: 22,
    flexDirection: 'row',

    alignItems: 'center',
  },
  button: {
    height: 30,
    borderRadius: 7,
    width: 60,
    marginTop: 10,
    backgroundColor: '#EE6492',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContact: {
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
    width: width * 0.8,

    shadowOffset: {
      width: -3,
      height: -2,
    },
    elevation: -4,
    alignItems: 'center',
    alignSelf: 'center',
    height: 40,
    marginTop: 40,
    paddingBottom: 10,
  },
});
function Stars({...props}) {
  return (
    <MaterialCommunity
      name={'star'}
      color={props.filled === true ? '#EE6492' : '#CCC'}
      size={32}
      style={{flexDirection: 'row', paddingLeft: 5}}
    />
  );
}
export default memo(VerticalContent);
