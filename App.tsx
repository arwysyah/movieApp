import React, {ReactNode} from 'react';
import {StatusBar} from 'react-native';
import IndexNavigation from './src/navigations';
import BottomNavigation from './src/navigations/bottom/ BottomNavigation';
import MainNav from './src/navigations/MainNav';

const App: ReactNode = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <IndexNavigation />
      {/* <Home /> */}
    </>
  );
};
export default App;
