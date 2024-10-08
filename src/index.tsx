import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppNavigator from './navigation/appNavigator';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
	useEffect(() => {
		// Hide the splash screen when the component mounts.
		SplashScreen.hide();
	}, []);

	return (
		<SafeAreaView style={{flex: 1}}>
			<AppNavigator />
		</SafeAreaView>
	);
};

export default App;
