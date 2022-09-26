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
    borderRadius: 5,
  },
  MenuStyle: {
    marginTop: 10,
  },
  hiText: {
    color: Theme.black,
    fontSize: Theme.scale(28),
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
  },
  WelText: {
    color: Theme.black,
    fontSize: Theme.scale(30),
    fontFamily: Fonts.HELODOX_BOLD_FONT,
    marginTop: -5,
  },
  TextWrapper: {
    marginLeft: 25,
    marginTop: 25,
  },
  InputBoxWrapper: {
    height: Theme.hp(7),
    backgroundColor: Theme.white,
    marginHorizontal: 25,
    borderRadius: 15,
    elevation: 5,
    marginTop: 30,
    flexDirection: Theme.row,
    justifyContent: Theme.spaceBetween,
  },
  searchWrapper: {
    height: Theme.hp(7),
    backgroundColor: Theme.primary,
    width: 60,
    borderRadius: 15,
    justifyContent: Theme.align,
    alignItems: Theme.align,
  },
  textInputStyle: {
    marginLeft: 10,
    fontSize: Theme.scale(18),
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
    flex: 1,
    color: '#707070',
    marginRight: 5,
  },
  catWprapper: {
    flexDirection: Theme.row,
    justifyContent: Theme.spaceBetween,
    marginHorizontal: 25,
    marginTop: 20,
  },
  CatText: {
    color: Theme.black,
    fontSize: Theme.scale(22),
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
  },
  SeeText: {
    color: Theme.black,
    fontSize: Theme.scale(16),
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
    alignSelf: 'center',
  },
  FlatView: {
    height: Theme.hp(15),
    width: Theme.wp(28),
    backgroundColor: Theme.primary,
    marginHorizontal: 10,
    paddingHorizontal: 3,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  docText: {
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
    fontSize: Theme.scale(12),
    color: Theme.white,
  },
  totalText: {
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
    fontSize: Theme.scale(10),
    color: Theme.white,
  },
  docWrapper: {
    height: Theme.hp(14),
    backgroundColor: Theme.white,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 25,
    marginVertical: 15,
    flexDirection: Theme.row,
    justifyContent: Theme.spaceBetween,
    paddingHorizontal: 15,
  },
  DocNameText: {
    color: Theme.black,
    fontSize: Theme.scale(18),
    fontFamily: Fonts.HELODOX_BOLD_FONT,
  },
  specialText: {
    color: Theme.lightGray,
    fontSize: Theme.scale(14),
    fontFamily: Fonts.HELODOX_LIGHT_FONT,
  },
  imageStyle: {
    alignSelf: Theme.align,
  },
  wrapText: {
    alignSelf: Theme.align,
    marginLeft: 15,
  },
  ratingText: {
    color: Theme.black,
    alignSelf: 'center',
    marginLeft: 10,
  },
});

export default styles;
