import { StyleSheet } from 'react-native';
import { primary } from '../../utils/theme/colors';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/metrics';
import { theme } from '../../utils/theme';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.primary.white,
    },
    heading: {
      color: primary.black,
      fontFamily: theme.fonts.inter.semiBold,
      fontSize: moderateScale(18),
      marginBottom: verticalScale(2),
    },
    text: {
      color: primary.black,
      fontFamily: theme.fonts.inter.regular,
      fontSize: moderateScale(14),
      marginBottom: verticalScale(24),
    },
    forgotPassword: {
      fontFamily: theme.fonts.inter.regular,
      fontSize: moderateScale(14),
    },
    divider: {
      flexDirection: 'row',
      width: '80%',
      alignItems: 'center',
      marginVertical: verticalScale(24),
    },
    dividerText: {
      color: theme.colors.grey[400],
      fontFamily: theme.fonts.inter.regular,
      fontSize: moderateScale(14),
      marginHorizontal: horizontalScale(8),
    },
    termsAndConditions: {
      color: theme.colors.grey[400],
      fontSize: moderateScale(12),
      lineHeight: moderateScale(20),
      marginBottom: verticalScale(24),
      textAlign: 'center',
      width: '80%',
    },
    textContainer: {
      flexDirection: 'row',
    },
  });
};

export default styles;
