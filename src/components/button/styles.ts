import {StyleSheet} from 'react-native';
import {primary} from '../../utils/theme/colors';

const styles = (type: string) => {
    return StyleSheet.create({
        button: {
            backgroundColor: type === 'primary' ? primary.black : primary[2],
            borderRadius: 25,
            paddingVertical: 12,
            paddingHorizontal: 25,
            alignItems: 'center',
        },
        buttonText: {
            color: primary.white,
            fontSize: 16,
            textTransform: 'uppercase',
        },
    });
};

export default styles;
