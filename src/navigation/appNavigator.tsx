import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import RegistrationPage from '../pages/registration';
import OnboardingPage from '../pages/onboarding';
import LoginPage from '../pages/login';
import { RootStackParamList, NavigationScreen } from './routes';


const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NavigationScreen.SAMPLE}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={NavigationScreen.HOME} component={Home} />
        <Stack.Screen name={NavigationScreen.REGISTRATION} component={RegistrationPage} />
        <Stack.Screen name={NavigationScreen.ONBOARDING} component={OnboardingPage} />
        <Stack.Screen name={NavigationScreen.LOGIN} component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
