import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Profile"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Profile" component={Profile} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
