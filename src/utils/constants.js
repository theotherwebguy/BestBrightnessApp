import { Dimensions, PixelRatio } from 'react-native';

export const Colors = {
    primary: '#052560',
    accent: '#CEF4EB',
    textWhite: '#ffffff',
    textBlack: '#000000',
  };
  
  export const Fonts = {
    primary: 'Roboto',
  };

  

const { width, height } = Dimensions.get('window');
const scale = width / 375; // Standardize based on a reference width (e.g., iPhone 11 width)

const responsiveFontSize = (size) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};