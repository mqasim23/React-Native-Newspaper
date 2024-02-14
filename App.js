import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { AppNavigation } from './src/navigation';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
