import React from 'react';
import {StyleSheet} from 'react-native';
import Fonts from '../../Constants/Fonts';
import Theme from '../../Constants/Theme';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  textWrapper: {
    flexDirection: Theme.row,
    alignSelf: Theme.align,
    marginTop: '25%',
  },
  loginText: {
    color: Theme.black,
    fontSize: Theme.scale(16),
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
    textAlign: Theme.align,
    marginTop: 50,
  },
  socialWrapper: {
    flexDirection: Theme.row,
    justifyContent: Theme.spaceEvenly,
    marginHorizontal: 50,
    marginTop: 20,
  },
  docButton: {
    height: Theme.hp(20),
    width: Theme.wp(60),
    alignSelf: Theme.align,
    backgroundColor: Theme.white,
    borderRadius: 25,
    justifyContent: Theme.align,
    alignItems: Theme.align,
    marginTop: 30,
    elevation: 3,
  },
  patButton: {
    height: Theme.hp(20),
    width: Theme.wp(60),
    alignSelf: Theme.align,
    backgroundColor: Theme.white,
    borderRadius: 25,
    justifyContent: Theme.align,
    alignItems: Theme.align,
    marginTop: 30,
    elevation: 3,
  },

  CustomText: {
    fontFamily: Fonts.HELODOX_BOLD_FONT,
    fontSize: Theme.scale(18),
    color: Theme.white,
  },
  docText: {
    color: Theme.primary,
    fontSize: Theme.scale(15),
    marginVertical: 5,
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
  },
  headText: {
    fontSize: Theme.scale(25),
    color: Theme.primary,
    textAlign: Theme.align,
    marginTop: '20%',
    fontFamily: Fonts.HELODOX_BOLD_FONT,
  },
});

export default styles;
