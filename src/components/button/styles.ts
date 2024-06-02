import {StyleSheet} from 'react-native';
import {primary} from '../../utils/theme/colors';
import {ButtonType} from '../../utils/constants';
import {horizontalScale, moderateScale} from '../../utils/metrics';
import {inter} from '../../utils/theme/fonts';

const styles = (buttonType: ButtonType) => {
	let buttonBackgroundColor: string = '';
	let buttonTextColor: string = '';

	switch (buttonType) {
		case ButtonType.Primary:
			buttonBackgroundColor = primary[1];
			buttonTextColor = primary.white;
			break;
	}
	return StyleSheet.create({
		button: {
			alignItems: 'center',
			backgroundColor: buttonBackgroundColor,
			borderRadius: moderateScale(8),
			maxWidth: horizontalScale(316),
			width: '80%',
		},
		buttonText: {
			color: buttonTextColor,
			fontFamily: inter.medium,
			fontSize: 14,
			lineHeight: 40,
		},
	});
};

export default styles;
