import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import MainNav from './MainNav';

const IndexNavigation: FC = () => {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
};

export default IndexNavigation;
