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
    marginTop: 15,
    alignSelf: 'flex-end',
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
  customView: {
    backgroundColor: Theme.primary,
    marginTop: '20%',
    borderRadius: 25,
    marginHorizontal: 25,
    flexDirection: Theme.row,
    // height: Theme.hp(16),
    justifyContent: 'space-between',
  },
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
});

export default styles;
