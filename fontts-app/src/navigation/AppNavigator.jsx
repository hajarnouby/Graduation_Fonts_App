import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DesignerTabs from './DesignerTabs';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="DesignerTabs" component={DesignerTabs} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
