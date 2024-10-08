import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../utils/metrics';
import { theme } from '../../utils/theme';

const styles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: theme.colors.primary.white,
      flex: 1,
      justifyContent: 'center',
    },
    heading: {
      color: theme.colors.primary.black,
      fontFamily: theme.fonts.openSans.bold,
      fontSize: moderateScale(48),
    },
    subHeading: {
      color: theme.colors.grey[400],
      fontFamily: theme.fonts.jost.regular,
      fontSize: moderateScale(24),
      marginBottom: verticalScale(35),
      textAlign: 'center',
      width: '70%',
    },
  });
};

export default styles;
