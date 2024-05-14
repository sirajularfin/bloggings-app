import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

type InputBoxProps = {
    onChangeText: (text: string) => void;
    placeholderText: string;
    value: string;
    required: boolean;
};

const InputBox = (props: InputBoxProps) => {
    const classes = styles();
    return (
        <View style={classes.container}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={props.onChangeText}
                placeholder={
                    props.required
                        ? `${props.placeholderText} *`
                        : props.placeholderText
                }
                value={props.value}
                keyboardType={
                    props.placeholderText === 'Email'
                        ? 'email-address'
                        : 'default'
                }
                secureTextEntry={
                    props.placeholderText === 'Password' ||
                    props.placeholderText === 'Confirm Password'
                }
            />
        </View>
    );
};

export default InputBox;
