import React, {ReactNode} from 'react';
import {StatusBar} from 'react-native';
import IndexNavigation from './src/navigations';
import {store, persistor} from './src/components/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

const App: ReactNode = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar translucent backgroundColor="transparent" />
          <IndexNavigation />
        </PersistGate>
      </Provider>
      {/* <Home /> */}
    </>
  );
};
export default App;
