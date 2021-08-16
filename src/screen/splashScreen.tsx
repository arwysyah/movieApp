import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Easing,
} from 'react-native';

import {globalStyle, spacing} from '../components/styles';

const {height, width} = Dimensions.get('window');
const SIZE = height / 32;
export default function SplashScreen() {
  const moveLeft = useRef(new Animated.Value(0)).current;
  const moveRight = useRef(new Animated.Value(0)).current;

  const opacity = useState(new Animated.Value(0))[0];
  const [hide, setHide] = useState(false);

  const [rotateValue, setRotateValue] = useState(new Animated.Value(0));
  const opacityText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startImageRotate();
    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      Animated.timing(opacityText, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 1800);
  }, []);

  function startImageRotate() {
    rotateValue.setValue(0);

    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }
  async function moveDrawer() {
    await Animated.timing(moveLeft, {
      toValue: -500,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    await Animated.timing(moveRight, {
      toValue: 500,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    setHide(true);

    //   Animated.timing(moveDown, {
    //     toValue: 1,
    //     duration: 1000,
    //     useNativeDriver: true,
    //   }).start();
  }
  const rotateImage = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const drawerOne = {
    backgroundColor: '#f0f0f0',
    width: width / 2,
    height: height * 2,
    // left:-2,
    transform: [{translateX: moveLeft}],
  };
  const drawerTwo = {
    backgroundColor: '#f0f0f0',
    width: width / 2,
    // right:-2,
    height: height * 2,
    transform: [{translateX: moveRight}],
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Animated.View style={[drawerOne]} />
          <Animated.View style={[drawerTwo]} />
        </View>
        <Animated.Text
          style={{
            color: 'black',
            position: 'absolute',
            top: height / 1.5,
            fontSize: SIZE,
            left: width / 2.9,
            opacity,
          }}>
          Press Button
        </Animated.Text>
        {hide === false && (
          <Animated.View
            style={[
              styles.buttonContainer,
              {
                transform: [{rotate: rotateImage}],
              },
            ]}>
            <TouchableOpacity
              style={globalStyle.logoButton}
              onPress={moveDrawer}>
              <Image
                style={[globalStyle.image, {top: -spacing}]}
                source={require('../../src/assets/logo.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </Animated.View>
        )}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Animated.Text style={{opacity: opacityText}}>
            Created by Arwy Syahputra Siregar
          </Animated.Text>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  buttonContainer: {
    top: height / 2.5,
    alignItems: 'center',
    position: 'absolute',
    left: width / 3.4,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
