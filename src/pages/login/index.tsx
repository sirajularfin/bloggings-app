import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import InputBox from '../../components/inputBox';
import useLogin from './hooks/useLogin';
import Button from '../../components/button';
import {ButtonType} from '../../utils/constants';
import {verticalScale} from '../../utils/metrics';
import Google from '../../assets/icons/google';
import HorizontalLine from '../../components/horizontalLine';
import TextLink from '../../components/textLink';
import {theme} from '../../utils/theme';

const LoginPage = () => {
	const classes = styles();

	const {mobileOrEmail, setMobileOrEmail, password, setPassword} = useLogin();
	return (
		<View style={classes.container}>
			<Text style={classes.heading}>Login</Text>
			<Text style={classes.text}>
				Enter your credentials to log in to the app.
			</Text>
			<InputBox
				placeholderText="Mobile number or email"
				onChangeText={(text: string) => setMobileOrEmail(text)}
				value={mobileOrEmail}
				required={true}
				additionalStyles={{marginBottom: verticalScale(24)}}
			/>
			<InputBox
				placeholderText="Password"
				onChangeText={(text: string) => setPassword(text)}
				value={password}
				required={true}
				additionalStyles={{marginBottom: verticalScale(24)}}
			/>
			<Button
				title="Log in"
				onPress={() => console.log('Hello World')}
				type={ButtonType.Primary}
				additionalStyles={{marginBottom: verticalScale(24)}}
			/>
			<TextLink
				fontSize={14}
				textColor={theme.colors.grey[500]}
				onPress={() => console.log('Hello World')}>
				Forgot password?
			</TextLink>
			<View style={classes.divider}>
				<HorizontalLine />
				<Text style={classes.dividerText}>or continue with</Text>
				<HorizontalLine />
			</View>
			<Button
				icon={<Google />}
				onPress={() => console.log('Hello World')}
				title="Google"
				type={ButtonType.Secondary}
				additionalStyles={{marginBottom: verticalScale(24)}}
			/>
			<View style={classes.textContainer}>
				<Text style={classes.termsAndConditions}>
					By clicking continue, you agree to our
					<TextLink
						fontSize={12}
						textColor={theme.colors.primary.black}
						onPress={() => console.log('Hello World')}>
						Terms of Service
					</TextLink>
					and
					<TextLink
						fontSize={12}
						textColor={theme.colors.primary.black}
						onPress={() => console.log('Hello World')}>
						Privacy Policy
					</TextLink>
				</Text>
			</View>
			<View style={classes.textContainer}>
				<Text style={classes.text}>Don't have an account?</Text>
				<TextLink
					textColor={theme.colors.primary[0]}
					fontSize={15}
					onPress={() => console.log('Hello World')}>
					Create new account
				</TextLink>
			</View>
		</View>
	);
};

export default LoginPage;
