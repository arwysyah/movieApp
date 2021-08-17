import React, {ReactNode} from 'react';
import Home from './src/screen/Home';
import {StatusBar} from 'react-native';
import SplashScreen from './src/screen/splashScreen';
import MainNav from './src/navigations';
('./src/navigations/mainStack');

const App: ReactNode = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <MainNav />
      {/* <Home /> */}
    </>
  );
};
export default App;
