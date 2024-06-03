import {StyleSheet} from 'react-native';
import {theme} from '../../utils/theme';

const styles = () => {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.colors.primary.white,
			justifyContent: 'center',
		},
	});
};

export default styles;
