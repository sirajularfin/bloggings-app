import {StyleSheet} from 'react-native';
import {primary} from '../../utils/theme/colors';

const styles = () => {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: primary.white,
			justifyContent: 'center',
		},
	});
};

export default styles;
