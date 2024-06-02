import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../../utils/metrics';
import {primary} from '../../utils/theme/colors';
import {jost, openSans} from '../../utils/theme/fonts';

const styles = () => {
	return StyleSheet.create({
		container: {
			alignItems: 'center',
			backgroundColor: primary.white,
			flex: 1,
			justifyContent: 'center',
		},
		heading: {
			color: primary.black,
			fontFamily: openSans.bold,
			fontSize: moderateScale(48),
		},
		subHeading: {
			color: primary.grey,
			fontFamily: jost.regular,
			fontSize: moderateScale(24),
			marginBottom: verticalScale(35),
			textAlign: 'center',
			width: '70%',
		},
	});
};

export default styles;
