import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Movies from '../screen/Movies';
import Home from '../screen/Home';

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              borderRadius: 10,
              //   position: 'absolute',
            }}>
            {/* <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text> */}
            <MaterialCommunity
              name={label.toLowerCase()}
              size={30}
              style={{color: isFocused ? 'black' : 'grey'}}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    // <NavigationContainer>
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Movie"
        component={Movies}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
