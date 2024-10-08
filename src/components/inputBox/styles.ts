import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale } from '../../utils/metrics';
import { theme } from '../../utils/theme';

const styles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary.white,
      borderColor: theme.colors.grey[800],
      borderRadius: moderateScale(8),
      borderWidth: 1,
      paddingStart: horizontalScale(16),
      width: '80%',
    },
    inputText: {
      color: theme.colors.grey[400],
    },
  });
};

export default styles;
