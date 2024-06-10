import {StyleSheet} from 'react-native';
import {verticalScale} from '../../utils/metrics';
import {theme} from '../../utils/theme';

const styles = () => {
	return StyleSheet.create({
		line: {
			backgroundColor: theme.colors.grey[900],
			flex: 1,
			height: verticalScale(1),
			width: '100%',
		},
	});
};

export default styles;
