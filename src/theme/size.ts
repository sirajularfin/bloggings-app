import { useWindowDimensions } from 'react-native';

const { width, height } = useWindowDimensions();

export enum Size {
  SCREEN_WIDTH = width,
  SCREEN_HEIGHT = height,
}
