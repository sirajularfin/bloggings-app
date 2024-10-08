import React, { useEffect, useState } from 'react';
import { KeyboardType, TextInput, View, ViewStyle } from 'react-native';
import styles from './styles';

type InputBoxProps = {
  onChangeText: (text: string) => void;
  placeholderText: string;
  value: string;
  required: boolean;
  additionalStyles?: ViewStyle;
};

const InputBox = (props: InputBoxProps) => {
  const classes = styles();
  const [keyboardType, setKeyboardType] = useState<KeyboardType>('default');

  useEffect(() => {
    if (/^[a-zA-Z]/.test(props.value.charAt(0))) {
      setKeyboardType('email-address');
    } else if (/^\d$/.test(props.value.charAt(0))) {
      setKeyboardType('decimal-pad');
    } else {
      setKeyboardType('default');
    }
  }, [props.value]);

  return (
    <View style={[classes.container, props.additionalStyles]}>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={props.onChangeText}
        placeholder={props.placeholderText}
        value={props.value}
        keyboardType={keyboardType}
        secureTextEntry={
          props.placeholderText === 'Password' || props.placeholderText === 'Confirm Password'
        }
        style={classes.inputText}
      />
    </View>
  );
};

export default InputBox;
