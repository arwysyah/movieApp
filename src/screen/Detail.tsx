import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {globalStyle, TOP, spacing, width, height} from '../components/styles';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList, Stacks} from '../screen/utils/Interface';
import {StackNavigationProp} from '@react-navigation/stack';
import {imageUrl} from '../config/index';
import moment from 'moment';
export type Props = {
  navigation: StackNavigationProp<RootStackParamList, Stacks.home>;
};

const Detail: React.FC<Props> = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const {item}: any = route.params;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  });

  return (
    <ScrollView style={globalStyle.container}>
      {isLoading == true ? (
        <View>
          <ActivityIndicator size="large" color={'red'} />
        </View>
      ) : (
        <View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[globalStyle.backIconContainer, {marginTop: TOP * 2}]}>
              <MaterialCommunity name="arrow-left" size={25} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{height: 50}} />
          <View style={{paddingHorizontal: 20}}>
            <Text style={[globalStyle.titleWrite, {textAlign: 'center'}]}>
              {item.title}
            </Text>
            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: width * 0.7,
              }}>
              <Text style={globalStyle.smallText}>{item.popularity} views</Text>
              <Text style={globalStyle.smallText}>
                {moment(item.release_date).format('YYYY-MM-DD')}
              </Text>
              <Text style={globalStyle.smallText}>{item.vote_average}</Text>
              <MaterialCommunity
                name="star"
                size={19}
                color="grey"
                style={{left: -12}}
              />
            </View>
            <View style={{height: 10}} />
            <View style={{alignSelf: 'center'}}>
              <Image
                style={{
                  width: width * 0.7,
                  height: height * 0.5,
                  borderRadius: 5,
                }}
                resizeMode="contain"
                source={
                  item.urlImage === ''
                    ? require('../assets/logo.png')
                    : {uri: imageUrl + item.poster_path}
                }
              />
            </View>
            <View style={{top: spacing}}>
              <Text>{item.original_title}</Text>
            </View>
          </View>
          <View
            style={{
              top: TOP * 1.2,
              paddingHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{height: 50, width: 50, borderRadius: 40}}
              source={{uri: imageUrl + item.poster_path}}
            />
            <View style={{paddingLeft: 20}}>
              {/* <Text style={globalStyle.textUsual}>Written by</Text> */}
              <Text>
                <Text style={globalStyle.titleTextName}>
                  {item.original_title}
                </Text>
              </Text>
            </View>
          </View>
          <View style={{marginTop: 30, padding: 20}}>
            <Text style={globalStyle.smallText}>{item.overview}</Text>
          </View>
          <View style={{height: 70}} />
        </View>
      )}
    </ScrollView>
  );
};
export default Detail;
