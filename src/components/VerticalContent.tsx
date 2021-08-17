import React, {memo, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
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
const Articles: React.FC = () => {
  const [data, setData] = useState<IStateData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const navigation: Props = useNavigation();
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

  async function handleArchived(value) {
    try {
      //   setDataArchived([value, ...dataArchived]);
      //   await AsyncStorage.setItem('PIN', JSON.stringify([...dataArchived]));
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <SafeAreaView>
      <FlatList
        data={data}
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
                    {/* {from !== 'Profile' && (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        width: 90,
                        top: 6,
                      }}>
                      <TouchableOpacity onPress={() => handleArchived(item)}>
                        <MaterialCommunity
                          name="pin-outline"
                          size={20}
                          // color={pin === false ? 'grey' : 'black'}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <MaterialCommunity
                          name="dots-vertical"
                          size={20}
                          // color={dot === false ? 'grey' : 'black'}
                        />
                      </TouchableOpacity>
                    </View>
                  )} */}
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

export default memo(Articles);
