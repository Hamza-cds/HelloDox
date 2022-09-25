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
  MenuStyle: {
    marginTop: 10,
  },
  Notify: {
    marginRight: 15,
    alignSelf: Theme.align,
  },
  ProfileImage: {
    height: 50,
    width: 50,
  },
  notifyWrap: {
    flexDirection: Theme.row,
  },
  docText: {
    color: Theme.primary,
    fontSize: Theme.scale(22),
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
    textAlign: Theme.align,
    marginTop: 30,
  },
  appText: {
    color: Theme.primary,
    fontSize: Theme.scale(18),
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
    textAlign: Theme.align,
  },
  appointmentwrap: {
    backgroundColor: Theme.white,
    elevation: 3,
    marginHorizontal: 25,
    borderRadius: 10,
    marginVertical: 20,
  },
  requestWrap: {
    height: Theme.hp(15),
    backgroundColor: Theme.primary,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    // paddingLeft: 30,
    // paddingTop: 30,
    padding: 30,
  },
  timeRwap: {
    flexDirection: Theme.row,
    marginVertical: 5,
  },
  dateText: {
    marginLeft: 10,
    fontSize: Theme.scale(18),
    color: Theme.white,
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
  },
  appointText: {
    fontSize: Theme.scale(16),
    color: Theme.white,
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
  },
  icon: {
    alignSelf: Theme.align,
  },
  nameNlocatinWrap: {
    flexDirection: Theme.row,
    justifyContent: Theme.spaceBetween,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  designView: {
    height: Theme.hp(10),
    width: Theme.wp(20),
    backgroundColor: '#D8D8D8',
    borderRadius: 15,
    alignSelf: Theme.align,
  },
  locationWrap: {
    flexDirection: Theme.row,
    marginTop: 5,
  },
  locationText: {
    fontSize: Theme.scale(14),
    color: Theme.lightGray,
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
    marginLeft: 5,
  },
  nameText: {
    fontSize: Theme.scale(14),
    color: Theme.black,
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
  },
  wrapper: {
    alignSelf: Theme.align,
    marginLeft: 10,
  },
  Dot: {
    alignSelf: Theme.align,
  },
  iconStyle: {
    alignSelf: Theme.align,
  },
  accepButton: {
    height: 40,
    width: 130,
    backgroundColor: Theme.primary,
    elevation: 3,
    borderRadius: 15,
    justifyContent: Theme.align,
    alignItems: Theme.align,
  },
  acceptText: {
    color: Theme.white,
    fontSize: Theme.scale(14),
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
  },
  deleteButton: {
    height: 40,
    width: 130,
    backgroundColor: Theme.white,
    elevation: 3,
    borderRadius: 15,
    justifyContent: Theme.align,
    alignItems: Theme.align,
  },
  deteleText: {
    color: Theme.primary,
    fontSize: Theme.scale(14),
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
  },
  btnWrap: {
    flexDirection: Theme.row,
    justifyContent: Theme.spaceEvenly,
    marginBottom: 20,
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
    // paddingHorizontal: 15,
  },
  patNameText: {
    color: Theme.black,
    fontSize: Theme.scale(18),
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
  },
  specialText: {
    color: Theme.lightGray,
    fontSize: Theme.scale(12),
    fontFamily: Fonts.HELODOX_LIGHT_FONT,
  },
  imageStyle: {
    alignSelf: Theme.align,
    backgroundColor: 'pink',
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
