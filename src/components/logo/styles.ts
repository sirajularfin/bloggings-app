import {StyleSheet} from 'react-native';
import {primary} from '../../utils/theme/colors';
import {openSans} from '../../utils/theme/fonts';

const styles = () => {
	return StyleSheet.create({
		container: {
			flexDirection: 'row',
			justifyContent: 'center',
		},
		logoText: {
			color: primary.black,
			fontFamily: openSans.bold,
			textAlign: 'center',
		},
		logoIcon: {
			position: 'relative',
			right: 5,
			top: 5,
		},
	});
};

export default styles;
