import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './styles';
import {ROUTE_ONBOARDING} from '../../navigation/routes';
import {RootStackParamList} from '../../navigation/appNavigator';
import Logo from '../../components/logo';

const SplashPage = () => {
	const classes = styles();
	const navigation =
		useNavigation<
			NativeStackNavigationProp<RootStackParamList, 'UserRegistration'>
		>();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			// Navigate to another screen after 5 seconds
			navigation.navigate(ROUTE_ONBOARDING);
		}, 2000);
		// Clean up the timeout on component unmount
		return () => clearTimeout(timeoutId);
	}, [navigation]);

	return (
		<View style={classes.container}>
			<Logo fontSize={48} iconSize={21} isIconRequired={true} />
		</View>
	);
};

export default SplashPage;
