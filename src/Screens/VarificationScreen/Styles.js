import React from 'react';
import {StyleSheet} from 'react-native';
import Theme from '../../Constants/Theme';
import Fonts from '../../Constants/Fonts';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Theme.primary,
  },
  InnerContainer: {
    backgroundColor: Theme.white,
    flex: 1,
    marginTop: '25%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 2,
  },
  WrapViewPass: {
    height: 50,
    borderBottomWidth: 1,
    marginHorizontal: 25,
    flexDirection: Theme.row,
    marginTop: '30%',
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
    marginTop: '20%',
    justifyContent: Theme.align,
    alignItems: Theme.align,
  },
  CustomText: {
    color: Theme.white,
    fontSize: Theme.scale(18),
    fontFamily: Fonts.HELODOX_BOLD_FONT,
  },

  wrapView: {
    flexDirection: 'row',
    marginHorizontal: 15,
    alignSelf: 'center',
    marginTop: 20,
  },
  textInput: {
    color: 'black',
    width: 50,
    borderBottomWidth: 1,
    paddingLeft: 20,
    fontSize: Theme.scale(18),
  },
  ImageStyle: {
    position: Theme.relative,
    marginTop: '25%',
  },
  ResendText: {
    fontSize: Theme.scale(14),
    color: Theme.black,
    textAlign: Theme.align,
    marginTop: '5%',
    textDecorationLine: 'underline',
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
  },
  VerifyText: {
    fontSize: Theme.scale(20),
    color: Theme.black,
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
    textAlign: Theme.align,
    marginTop: '15%',
  },
});

export default styles;
