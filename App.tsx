import React, {ReactNode} from 'react';
import Home from './src/screen/Home';
import {StatusBar} from 'react-native';
import SplashScreen from './src/screen/splashScreen';

const App: ReactNode = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <SplashScreen />
      {/* <Home /> */}
    </>
  );
};
export default App;
