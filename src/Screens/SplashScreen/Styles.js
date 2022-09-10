import React from 'react';
import {StyleSheet} from 'react-native';
import Fonts from '../../Constants/Fonts';
import Theme from '../../Constants/Theme';

const styles = StyleSheet.create({
  SplashStyles: {
    flex: 1,
  },
  ProfileImage: {
    // height: 310,
    // width: 135,
    alignSelf: Theme.align,
    position: Theme.absolute,
    position: 'absolute',
    bottom: 10,
  },
  textWrapper: {
    flexDirection: Theme.row,
    alignSelf: Theme.align,
    position: Theme.absolute,
    top: '15%',
  },
  helText: {
    color: Theme.secondry,
    fontSize: Theme.scale(40),
    fontFamily: Fonts.HELODOX_BOLD_FONT,
  },
  docText: {
    color: Theme.textColor,
    marginLeft: 2,
    fontSize: Theme.scale(40),
    fontFamily: Fonts.HELODOX_BOLD_FONT,
  },
});

export default styles;
