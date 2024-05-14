import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

type buttonProps = {
    onPress: () => void;
    text: string;
    type: string;
};

const Button = (props: buttonProps) => {
    const classes = styles(props.type);
    return (
        <Pressable onPress={props.onPress} style={classes.button}>
            <Text style={classes.buttonText}>{props.text}</Text>
        </Pressable>
    );
};

export default Button;
