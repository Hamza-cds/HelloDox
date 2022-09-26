import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Fonts from '../../Constants/Fonts';
import Theme from '../../Constants/Theme';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // position: 'absolute',
    // left: 0,
    // top: 0,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
  },
  signInText: {
    color: Theme.black,
    fontSize: Theme.scale(22),
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
  },
  signUpText: {
    color: Theme.black,
    marginLeft: 15,
    fontSize: Theme.scale(22),
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
  },
  BtnWrapper: {
    flexDirection: Theme.row,
    marginTop: '10%',
    marginLeft: 30,
  },
  pagerView: {
    flex: 1,
    marginTop: '5%',
  },
  inputContainer: {
    backgroundColor: Theme.white,
    elevation: 3,
    marginHorizontal: 30,
    borderRadius: 15,
    paddingVertical: 15,
    // marginTop: '10%',
  },
  headText: {
    color: Theme.black,
    fontSize: Theme.scale(25),
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
    marginLeft: 30,
  },
  WrapViewEmail: {
    height: 50,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    flexDirection: Theme.row,
    marginTop: '5%',
  },
  WrapViewPass: {
    height: 50,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    flexDirection: Theme.row,
  },
  InputText: {
    marginLeft: 15,
    color: Theme.black,
    flex: 1,
  },
  iconStyle: {
    alignSelf: Theme.align,
    marginLeft: 10,
  },
  CustomButton: {
    height: Theme.hp(6),
    backgroundColor: Theme.primary,
    elevation: 3,
    marginHorizontal: 20,
    borderRadius: 50,
    marginTop: '15%',
    justifyContent: Theme.align,
    alignItems: Theme.align,
  },
  CustomText: {
    color: Theme.black,
    fontSize: Theme.scale(18),
    fontFamily: Fonts.HELODOX_BOLD_FONT,
  },
  socialWrapper: {
    flexDirection: Theme.row,
    justifyContent: Theme.spaceEvenly,
    marginHorizontal: 50,
    marginVertical: 20,
  },
  loginText: {
    color: Theme.black,
    fontSize: Theme.scale(16),
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
    textAlign: Theme.align,
    marginTop: 50,
  },
  termWrapper: {
    flexDirection: Theme.row,
    alignSelf: Theme.align,
    marginBottom: '5%',
    position: 'relative',
  },
  agreeText: {
    color: Theme.black,
    fontSize: Theme.scale(12),
    fontFamily: Fonts.HELODOX_SEMIBOLD_FONT,
  },
  termText: {
    color: Theme.secondry,
    fontSize: Theme.scale(12),
    fontFamily: Fonts.HELODOX_SEMIBOLD_FONT,
    marginLeft: 5,
    borderBottomWidth: 2,
    borderBottomColor: Theme.secondry,
  },
  forgetText: {
    color: Theme.textColor,
    textAlign: 'right',
    marginRight: 15,
    marginVertical: 15,
    fontSize: Theme.scale(15),
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
  },
});

export default styles;
