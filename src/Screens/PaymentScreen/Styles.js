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
    marginTop: '20%',
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
  InputWrapper: {
    // backgroundColor: 'red',
    marginHorizontal: 25,
  },
  iconStyle: {
    alignSelf: Theme.align,
    marginLeft: 10,
  },
  WrapViewEmailCard: {
    height: 50,
    borderBottomWidth: 1,
    marginHorizontal: 30,
    flexDirection: Theme.row,
    marginTop: '5%',
    marginTop: 30,
    // backgroundColor: 'red',
  },
  WrapViewEmail: {
    height: 50,
    borderBottomWidth: 1,
    marginHorizontal: 30,
    flexDirection: Theme.row,
    marginTop: '5%',
    // backgroundColor: 'red',
  },
  InputText: {
    marginLeft: 15,
    color: Theme.black,
    flex: 1,
  },
  appText: {
    color: Theme.primary,
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
    fontSize: Theme.scale(22),
    textAlign: 'center',
    marginTop: '7%',
  },
});

export default styles;
