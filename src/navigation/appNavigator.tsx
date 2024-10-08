import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_ONBOARDING, ROUTE_USER_REGISTRATION } from './routes';
import RegistrationPage from '../pages/registration';
import OnboardingPage from '../pages/onboarding';
import LoginPage from '../pages/login';

export type RootStackParamList = {
  Home: undefined;
  UserRegistration: undefined;
  Onboarding: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTE_LOGIN} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTE_HOME} component={Home} />
        <Stack.Screen name={ROUTE_USER_REGISTRATION} component={RegistrationPage} />
        <Stack.Screen name={ROUTE_ONBOARDING} component={OnboardingPage} />
        <Stack.Screen name={ROUTE_LOGIN} component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
