import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const Theme = {
  primary: '#7BBCF0',
  secondry: '#CD2F60',
  textColor: '#FD8C00',
  errorColor: 'red',
  black: '#000',
  white: '#FFFFFF',
  lightGray: '#ABABAB',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
  bold: 'bold',
  align: 'center',
  row: 'row',
  column: 'column',
  absolute: 'absolute',
  relative: 'relative',
  underline: 'underline',
  flexEnd: 'flex-end',
  flexStart: 'flex-start',
  baseLine: 'baseline',
  wp,
  hp,
  scale,
  verticalScale,
  moderateScale,
};

export default Theme;
