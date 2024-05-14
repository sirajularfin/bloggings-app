import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import InputBox from '../../components/inputBox';
import Button from '../../components/button';
import useRegistration from './hooks/useRegistration';

const RegistrationPage = () => {
    const classes = styles();
    const {
        confirmPassword,
        email,
        firstName,
        handleFormSubmit,
        lastName,
        password,
        setConfirmPassword,
        setEmail,
        setFirstName,
        setLastName,
        setPassword,
    } = useRegistration();

    return (
        <View style={classes.container}>
            <InputBox
                value={email}
                onChangeText={text => setEmail(text)}
                placeholderText="Email"
                required={true}
            />
            <InputBox
                value={firstName}
                onChangeText={text => setFirstName(text)}
                placeholderText="First Name"
                required={false}
            />
            <InputBox
                value={lastName}
                onChangeText={text => setLastName(text)}
                placeholderText="Last Name"
                required={false}
            />
            <InputBox
                value={password}
                onChangeText={text => setPassword(text)}
                placeholderText="Password"
                required={true}
            />
            <InputBox
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
                placeholderText="Confirm Password"
                required={true}
            />
            <Button text="Register" onPress={handleFormSubmit} type="primary" />
        </View>
    );
};

export default RegistrationPage;
