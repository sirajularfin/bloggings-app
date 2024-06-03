import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {moderateScale} from '../../utils/metrics';

type ITextLinkProps = {
	children: string;
	fontSize: number;
	textColor: string;
	onPress: () => void;
};
const TextLink = (props: ITextLinkProps) => {
	const classes = styles();
	return (
		<TouchableOpacity onPress={props.onPress}>
			<Text
				style={[
					classes.text,
					{color: props.textColor, fontSize: moderateScale(props.fontSize)},
				]}>
				{props.children}
			</Text>
		</TouchableOpacity>
	);
};

export default TextLink;
