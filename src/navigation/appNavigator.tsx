import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/home';
import {
    ROUTE_HOME,
    ROUTE_SPLASH_SCREEN,
    ROUTE_USER_REGISTRATION,
} from './routes';
import RegistrationPage from '../pages/registration';
import SplashPage from '../pages/splash';

export type RootStackParamList = {
    Splash: undefined;
    Home: undefined;
    UserRegistration: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={ROUTE_SPLASH_SCREEN}
                screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name={ROUTE_SPLASH_SCREEN}
                    component={SplashPage}
                />
                <Stack.Screen name={ROUTE_HOME} component={Home} />
                <Stack.Screen
                    name={ROUTE_USER_REGISTRATION}
                    component={RegistrationPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
