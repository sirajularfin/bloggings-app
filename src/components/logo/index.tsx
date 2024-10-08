import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import CircledPencil from '../../assets/icons/circledPencil';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/metrics';
import styles from './styles';

type ILogoProps = {
  fontSize: number;
  iconSize?: number;
  isIconRequired: boolean;
  additionalStyles?: ViewStyle;
};

const Logo = (props: ILogoProps) => {
  const classes = styles();
  return (
    <View style={[classes.container, props.additionalStyles]}>
      <Text style={[classes.logoText, { fontSize: moderateScale(props.fontSize) }]}>Bloggings</Text>
      {props.isIconRequired && (
        <CircledPencil
          height={verticalScale(props.iconSize ?? 0)}
          width={horizontalScale(props.iconSize ?? 0)}
          style={classes.logoIcon}
        />
      )}
    </View>
  );
};

export default Logo;
