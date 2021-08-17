import React, {ReactNode} from 'react';
import {StatusBar} from 'react-native';
import IndexNavigation from './src/navigations';
import {store} from './src/components/redux/store';
import {Provider} from 'react-redux';

const App: ReactNode = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar translucent backgroundColor="transparent" />
        <IndexNavigation />
      </Provider>
      {/* <Home /> */}
    </>
  );
};
export default App;
