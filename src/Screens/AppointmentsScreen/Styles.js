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
    marginTop: '10%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 2,
  },
  headerWrapper: {
    flexDirection: Theme.row,
    justifyContent: Theme.spaceBetween,
    marginHorizontal: 25,
    marginTop: 25,
  },
  notifyWrap: {
    flexDirection: Theme.row,
  },
  Notify: {
    marginRight: 15,
    alignSelf: Theme.align,
  },
  ProfileImage: {
    height: 40,
    width: 40,
  },
  MenuStyle: {
    marginTop: 10,
  },
  customView: {
    backgroundColor: Theme.primary,
    marginVertical: 10,
    borderRadius: 25,
    marginHorizontal: 25,
    flexDirection: Theme.row,
    // height: Theme.hp(16),
    justifyContent: 'space-between',
  },
  // customView: {
  //   backgroundColor: Theme.primary,
  //   marginTop: '20%',
  //   borderRadius: 25,
  //   marginHorizontal: 25,
  //   flexDirection: Theme.row,
  //   // height: Theme.hp(16),
  //   justifyContent: 'space-between',
  // },
  CustomButton: {
    height: 55,
    backgroundColor: Theme.primary,
    marginTop: '10%',
    marginHorizontal: 25,
    borderRadius: 15,
    justifyContent: Theme.align,
    alignItems: Theme.align,
  },
  CustomText: {
    color: Theme.white,
    fontSize: Theme.scale(16),
    fontFamily: Fonts.HELODOX_SEMIBOLD_FONT,
  },
  appText: {
    color: Theme.primary,
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
    fontSize: Theme.scale(22),
    textAlign: 'center',
    marginTop: '7%',
  },
  userView: {
    flexDirection: 'row',
    justifyContent: Theme.spaceBetween,
    marginHorizontal: 30,
    marginVertical: 25,
  },
  userTextt: {
    fontSize: Theme.scale(20),
    color: Theme.primary,
    fontFamily: Fonts.HELODOX_SEMIBOLD_FONT,
  },
  EmailText: {
    fontSize: Theme.scale(14),
    color: Theme.primary,
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
  },
  wrapView: {
    alignSelf: 'center',
    marginRight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: Theme.primary,
  },
  btnWrap: {
    flexDirection: Theme.row,
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 20,
  },
  upBtn: {
    height: 50,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    elevation: 5,
  },
  pastBtn: {
    height: 50,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    elevation: 5,
  },
  upText: {
    color: Theme.white,
    fontSize: Theme.scale(15),
    fontFamily: Fonts.HELODOX_SEMIBOLD_FONT,
  },
  pastText: {
    color: Theme.primary,
    fontSize: Theme.scale(15),
    fontFamily: Fonts.HELODOX_SEMIBOLD_FONT,
  },
  pagerView: {
    flex: 1,
    marginTop: 10,
  },
});

export default styles;
