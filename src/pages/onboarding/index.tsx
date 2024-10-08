import React from 'react';
import { Text, View } from 'react-native';
import Logo from '../../components/logo';
import styles from './styles';
import OnboardingLogo from '../../assets/icons/onboardingLogo';
import { horizontalScale, verticalScale } from '../../utils/metrics';
import Button from '../../components/button';
import { ButtonType } from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';
import { ROUTE_LOGIN } from '../../navigation/routes';
import { RootStackParamList } from '../../navigation/appNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const OnboardingPage = () => {
  const classes = styles();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();

  return (
    <View style={classes.container}>
      <Text style={classes.heading}>Welcome To</Text>
      <Logo
        fontSize={48}
        iconSize={21}
        isIconRequired={true}
        additionalStyles={{ marginBottom: verticalScale(40) }}
      />
      <OnboardingLogo
        width={horizontalScale(213)}
        height={verticalScale(204)}
        marginBottom={verticalScale(45)}
      />
      <Text style={classes.subHeading}>Create a unique blog to pulish your passion, your way.</Text>
      <Button
        title='Continue'
        onPress={() => navigation.navigate(ROUTE_LOGIN)}
        type={ButtonType.Primary}
      />
    </View>
  );
};

export default OnboardingPage;
