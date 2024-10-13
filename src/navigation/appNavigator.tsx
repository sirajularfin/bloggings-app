import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import RegistrationPage from '../pages/registration';
import OnboardingPage from '../pages/onboarding';
import LoginPage from '../pages/login';
import { Route } from './routes';

export type RootStackParamList = {
  SAMPLE: undefined;
  HOME: undefined;
  REGISTRATION: undefined;
  ONBOARDING: undefined;
  LOGIN: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Route.SAMPLE} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Route.HOME} component={Home} />
        <Stack.Screen name={Route.REGISTRATION} component={RegistrationPage} />
        <Stack.Screen name={Route.ONBOARDING} component={OnboardingPage} />
        <Stack.Screen name={Route.LOGIN} component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
