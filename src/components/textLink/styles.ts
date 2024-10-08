import { StyleSheet } from 'react-native';
import { theme } from '../../utils/theme';
import { horizontalScale } from '../../utils/metrics';

const styles = () => {
  return StyleSheet.create({
    text: {
      fontFamily: theme.fonts.inter.regular,
      marginHorizontal: horizontalScale(5),
    },
  });
};

export default styles;
