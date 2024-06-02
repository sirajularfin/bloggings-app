import React from 'react';
import {Text, View} from 'react-native';
import Logo from '../../components/logo';
import styles from './styles';
import OnboardingLogo from '../../assets/icons/onboardingLogo';
import {horizontalScale, verticalScale} from '../../utils/metrics';
import Button from '../../components/button';
import {ButtonType} from '../../utils/constants';

const OnboardingPage = () => {
	const classes = styles();

	return (
		<View style={classes.container}>
			<Text style={classes.heading}>Welcome To</Text>
			<Logo
				fontSize={48}
				iconSize={21}
				isIconRequired={true}
				additionalStyles={{marginBottom: verticalScale(40)}}
			/>
			<OnboardingLogo
				width={horizontalScale(213)}
				height={verticalScale(204)}
				marginBottom={verticalScale(45)}
			/>
			<Text style={classes.subHeading}>
				Create a unique blog to pulish your passion, your way.
			</Text>
			<Button
				text="Continue"
				onPress={() => console.log('NULL')}
				type={ButtonType.Primary}
			/>
		</View>
	);
};

export default OnboardingPage;
