import { Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';

export enum FontType {
  Black = 'Black',
  BlackItalic = 'BlackItalic',
  Bold = 'Bold',
  BoldItalic = 'BoldItalic',
  ExtraBold = 'ExtraBold',
  ExtraBoldItalic = 'ExtraBoldItalic',
  Medium = 'Medium',
  MediumItalic = 'MediumItalic',
  Normal = 'Normal',
  Regular = 'Regular',
  SemiBold = 'SemiBold',
  SemiBoldItalic = 'SemiBoldItalic',
}

type TFontType = {
  [key in FontType]: string;
};

export const getFont: TFontType = {
  [FontType.Black]: isIOS ? 'Montserrat-Black' : 'Montserrat Black',
  [FontType.BlackItalic]: isIOS ? 'Montserrat-BlackItalic' : 'Montserrat BlackItalic',
  [FontType.Bold]: isIOS ? 'Montserrat-Bold' : 'Montserrat Bold',
  [FontType.BoldItalic]: isIOS ? 'Montserrat-BoldItalic' : 'Montserrat BoldItalic',
  [FontType.ExtraBold]: isIOS ? 'Montserrat-ExtraBold' : 'Montserrat ExtraBold',
  [FontType.ExtraBoldItalic]: isIOS ? 'Montserrat-ExtraBoldItalic' : 'Montserrat ExtraBoldItalic',
  [FontType.Medium]: isIOS ? 'Montserrat-Medium' : 'Montserrat Medium',
  [FontType.MediumItalic]: isIOS ? 'Montserrat-MediumItalic' : 'Montserrat MediumItalic',
  [FontType.Normal]: isIOS ? 'Montserrat-Regular' : 'Montserrat Regular',
  [FontType.Regular]: isIOS ? 'Montserrat-Regular' : 'Montserrat Regular',
  [FontType.SemiBold]: isIOS ? 'Montserrat-SemiBold' : 'Montserrat SemiBold',
  [FontType.SemiBoldItalic]: isIOS ? 'Montserrat-SemiBoldItalic' : 'Montserrat SemiBoldItalic',
};
