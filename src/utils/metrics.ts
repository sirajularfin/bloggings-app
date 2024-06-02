import {useWindowDimensions} from 'react-native';

/**
 * @description
 * For more details visit: https://medium.com/simform-engineering/create-responsive-design-in-react-native-f84522a44365
 */
const {width, height} = useWindowDimensions();

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// For width, marginLeft, marginRight, marginHorizontal, paddingLeft, paddingRight, paddingHorizontal and likewise.
const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;

// For height, marginTop, marginBottom, marginVertical, line-height, paddingTop, paddingBottom, paddingVertical and likewise.
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

// For font-size, borderRadius and likewise.
const moderateScale = (size: number, factor: number = 0.5) =>
	size + (horizontalScale(size) - size) * factor;

export {horizontalScale, verticalScale, moderateScale};
