import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import Detail from '../screen/Detail';
import Search from '../screen/Search';
import SplashScreen from '../screen/splashScreen';

import MainStack from './mainStack';

const Stack = createStackNavigator();

const MainNav: FC = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name={'SplashScreen'}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'BottomNavigation'}
        component={MainStack}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'Details'}
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Search'}
        component={Search}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNav;
