import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import CircledPencil from '../../assets/icons/circledPencil';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_USER_REGISTRATION} from '../../navigation/routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/appNavigator';

const SplashPage = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList, 'UserRegistration'>>();
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            // Navigate to another screen after 5 seconds
            navigation.navigate(ROUTE_USER_REGISTRATION);
        }, 5000);
        // Clean up the timeout on component unmount
        return () => clearTimeout(timeoutId);
    }, [navigation]);

    const classes = styles();

    return (
        <View style={classes.container}>
            <Text style={classes.logoText}>Bloggings</Text>
            <CircledPencil style={classes.logoIcon} width={24} height={24} />
        </View>
    );
};

export default SplashPage;
