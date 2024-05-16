import {StyleSheet} from 'react-native';
import {primary} from '../../utils/theme/colors';
import {openSans} from '../../utils/theme/fonts';

const styles = () => {
    return StyleSheet.create({
        container: {
            alignItems: 'center',
            backgroundColor: primary.white,
            flex: 1,
            flexDirection: 'row',
            height: '100%',
            justifyContent: 'center',
            width: '100%',
        },
        logoText: {
            color: primary.black,
            fontFamily: openSans.bold,
            fontSize: 48,
            position: 'relative',
            top: -30,
        },
        logoIcon: {
            position: 'relative',
            top: -45,
        },
    });
};

export default styles;
