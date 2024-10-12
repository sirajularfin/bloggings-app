import React from 'react';
import { View, StyleProp, ViewStyle, DimensionValue, FlexAlignType } from 'react-native';
import { Size } from '../../utils/theme/Size';
import { Colors } from '../../utils/theme/Colors';

interface Props {
  width?: 'screen-width' | DimensionValue;
  height?: 'screen-height' | DimensionValue;
  alignX?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  alignY?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  alignSelf?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  padding?: Size;
  paddingTop?: Size;
  paddingBottom?: Size;
  paddingLeft?: Size;
  paddingRight?: Size;
  paddingVertical?: Size;
  paddingHorizontal?: Size;
  backgroundColor?: Colors;
  layout?: 'vertical' | 'horizontal' | 'wrap';
  horizontalGapBetweenObjects?: number;
  verticalGapBetweenObjects?: number;
}

const Container: React.FC<React.PropsWithChildren<Props>> = ({ children, ...props }) => {
  const style: StyleProp<ViewStyle> = {
    flex: 1,
    flexDirection:
      props.layout === 'horizontal' ? 'column' : props.layout === 'vertical' ? 'row' : undefined,
    width: props.width === 'screen-width' ? Size.SCREEN_WIDTH : (props.width as DimensionValue),
    height:
      props.height === 'screen-height' ? Size.SCREEN_HEIGHT : (props.height as DimensionValue),
    justifyContent: (props.layout !== 'horizontal' ? props.alignY : props.alignX) as
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'space-evenly'
      | undefined,
    alignItems: (props.layout !== 'vertical' ? props.alignX : props.alignY) as
      | FlexAlignType
      | undefined,
    alignSelf: props.alignSelf as FlexAlignType | undefined,
    padding: props.padding,
    paddingHorizontal: props.paddingHorizontal,
    paddingVertical: props.paddingVertical,
    paddingTop: props.paddingTop,
    paddingRight: props.paddingRight,
    paddingBottom: props.paddingBottom,
    paddingLeft: props.paddingLeft,
    flexWrap: props.layout === 'wrap' ? 'wrap' : 'nowrap',
    rowGap: props.verticalGapBetweenObjects,
    columnGap: props.horizontalGapBetweenObjects,
    backgroundColor: props.backgroundColor ?? Colors.white,
  };

  return <View style={style}>{children}</View>;
};

export default Container;
