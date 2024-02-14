import { Routes } from '../common';
import { HomeScreen, ArticleScreen } from '../screens';

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name={Routes.home} component={HomeScreen} />
      <Stack.Screen name={Routes.article} component={ArticleScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
