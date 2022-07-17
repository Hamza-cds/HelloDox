import React from 'react';
import {StyleSheet} from 'react-native';
import Fonts from '../../Constants/Fonts';
import Theme from '../../Constants/Theme';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  headerView: {
    backgroundColor: Theme.primary,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
  headerWrapper: {
    flexDirection: Theme.row,
    justifyContent: Theme.spaceBetween,
    marginHorizontal: 25,
    marginTop: 15,
    alignSelf: 'flex-end',
  },
  MenuStyle: {
    marginTop: 10,
  },
  notifyWrap: {
    flexDirection: Theme.row,
  },
  ProfileImage: {
    height: 40,
    width: 40,
  },
  Notify: {
    marginRight: 15,
    alignSelf: Theme.align,
  },
  docView: {
    flexDirection: Theme.row,
    marginLeft: 25,
    marginVertical: 25,
  },
  DocImage: {
    height: 80,
    width: 80,
  },
  docTextView: {
    marginLeft: 20,
    justifyContent: Theme.align,
  },
  docText: {
    fontSize: Theme.scale(18),
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
    color: Theme.white,
  },
  PhyText: {
    fontSize: Theme.scale(15),
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
    color: Theme.white,
  },
  diseasWrap: {
    backgroundColor: Theme.white,
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
  },
  appWrap: {
    backgroundColor: Theme.white,
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
  },
  workWrap: {
    height: Theme.hp(15),
    backgroundColor: Theme.white,
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
  },
  aboutWrap: {
    backgroundColor: Theme.white,
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
  },
  iconWrap: {
    flexDirection: Theme.row,
    justifyContent: Theme.spaceEvenly,
    marginVertical: 10,
  },
  perText: {
    color: '#707070',
    fontSize: Theme.scale(10),
    marginVertical: 3,
    textAlign: 'center',
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
  },
  scoreText: {
    color: '#707070',
    fontSize: Theme.scale(10),
    textAlign: 'center',
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
  },
  dividerView: {
    height: 2,
    color: 'black',
  },
  simpleText: {
    color: Theme.black,
    fontSize: Theme.scale(16),
    fontFamily: Fonts.HELODOX_BOLD_FONT,
    marginLeft: 10,
  },
  boneText: {
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
    color: '#363636',
    fontSize: Theme.scale(12),
    alignSelf: 'center',
  },
  bulletWrap: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#707070',
    marginHorizontal: 20,
  },
  heloText: {
    color: Theme.black,
    fontFamily: Fonts.HELODOX_BOLD_FONT,
    fontSize: Theme.scale(16),
    marginLeft: 15,
    marginVertical: 10,
  },
  feeText: {
    color: '#363636',
    marginLeft: 20,
    marginVertical: 10,
    fontSize: Theme.scale(16),
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
  },
  amoutText: {
    color: '#363636',
    marginVertical: 10,
    fontSize: Theme.scale(16),
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
    marginRight: 20,
  },
  CustomButton: {
    height: 50,
    backgroundColor: Theme.primary,
    marginVertical: 15,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  CustomText: {
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
    fontSize: Theme.scale(18),
    color: Theme.white,
  },
  wrokText: {
    color: Theme.black,
    fontFamily: Fonts.HELODOX_BOLD_FONT,
    fontSize: Theme.scale(16),
    marginLeft: 15,
    marginVertical: 10,
  },
  orthoText: {
    color: '#363636',
    marginLeft: 20,
    fontSize: Theme.scale(16),
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
  },
  proText: {
    color: '#363636',
    marginLeft: 20,
    fontSize: Theme.scale(16),
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
  },
  abourText: {
    color: Theme.black,
    fontFamily: Fonts.HELODOX_BOLD_FONT,
    fontSize: Theme.scale(16),
    marginLeft: 15,
    marginTop: 15,
  },
  loremText: {
    color: '#363636',
    fontSize: Theme.scale(14),
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
    marginHorizontal: 25,
    marginVertical: 15,
  },
});

export default styles;
