import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const HorizontalLine = () => {
	const classes = styles();
	return <View style={classes.line}></View>;
};

export default HorizontalLine;
