import {StyleSheet} from 'react-native';
import {primary} from '../../utils/theme/colors';

const styles = () => {
    return StyleSheet.create({
        container: {
            backgroundColor: primary[3],
            marginHorizontal: 10,
            marginVertical: 8,
            paddingStart: 5,
        },
    });
};

export default styles;
