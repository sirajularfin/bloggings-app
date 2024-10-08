import { StyleSheet } from 'react-native';
import { theme } from '../../utils/theme';

const styles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    logoText: {
      color: theme.colors.primary.black,
      fontFamily: theme.fonts.openSans.bold,
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
