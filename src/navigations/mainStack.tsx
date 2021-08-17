import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import SplashScreen from '../screen/splashScreen';
import Home from '../screen/Home';
import Detail from '../screen/Detail';

const Stack = createStackNavigator();

const MainStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name={'SplashScreen'}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Details'}
        component={Detail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
