import React from 'react';
import { Pressable, Text, View, ViewStyle } from 'react-native';
import styles from './styles';
import { ButtonType } from '../../utils/constants';

type buttonProps = {
  title: string;
  type: ButtonType;
  icon?: React.JSX.Element;
  onPress: () => void;
  additionalStyles?: ViewStyle;
};

const Button = (props: buttonProps) => {
  const classes = styles(props.type);
  return (
    <Pressable onPress={props.onPress} style={[classes.button, props.additionalStyles]}>
      {props.icon && <View style={classes.buttonIcon}>{props.icon}</View>}
      <Text style={classes.buttonText}>{props.title}</Text>
    </Pressable>
  );
};

export default Button;
