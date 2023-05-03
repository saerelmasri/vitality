import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginProvider from './app/context/LoginProvider';
import Stack from './app/Navigation/MainNavigator';

const App = () => {
  return (
    <LoginProvider>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </LoginProvider>
  );
};

export default App;