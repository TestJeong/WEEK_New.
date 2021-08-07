/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tap from './src/navgation/Tap';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';
import ContextProvider from './src/store/context';

export const AppContext = createContext();
const App = () => {
  return (
    <Provider store={store}>
      <ContextProvider>
        <NavigationContainer>
          <Tap />
        </NavigationContainer>
      </ContextProvider>
    </Provider>
  );
};

export default App;
