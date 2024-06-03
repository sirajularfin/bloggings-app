import {StyleSheet} from 'react-native';
import {ButtonType} from '../../utils/constants';
import {
	horizontalScale,
	moderateScale,
	verticalScale,
} from '../../utils/metrics';
import {theme} from '../../utils/theme';

const styles = (buttonType: ButtonType) => {
	let buttonBackgroundColor: string = '';
	let buttonTextColor: string = '';

	switch (buttonType) {
		case ButtonType.Primary:
			buttonBackgroundColor = theme.colors.primary[0];
			buttonTextColor = theme.colors.primary.white;
			break;
		case ButtonType.Secondary:
			buttonBackgroundColor = theme.colors.grey[1000];
			buttonTextColor = theme.colors.primary.black;
			break;
	}
	return StyleSheet.create({
		button: {
			alignItems: 'center',
			backgroundColor: buttonBackgroundColor,
			borderRadius: moderateScale(8),
			flexDirection: 'row',
			justifyContent: 'center',
			maxWidth: horizontalScale(316),
			width: '80%',
		},
		buttonText: {
			color: buttonTextColor,
			fontFamily: theme.fonts.inter.medium,
			fontSize: moderateScale(14),
			lineHeight: verticalScale(40),
		},
		buttonIcon: {
			width: horizontalScale(20),
			height: verticalScale(20),
			marginHorizontal: horizontalScale(10),
		},
	});
};

export default styles;
