import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import CircledPencil from '../../assets/icons/circledPencil';

const SplashPage = () => {
    const classes = styles();
    return (
        <View style={classes.container}>
            <Text style={classes.logoText}>Bloggings</Text>
            <CircledPencil style={classes.logoIcon} width={24} height={24} />
        </View>
    );
};

export default SplashPage;
