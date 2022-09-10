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
  addText: {
    color: Theme.primary,
    fontSize: Theme.scale(24),
    textAlign: 'center',
    marginVertical: 35,
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
  },
  WrapViewEmail: {
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
  WrapViewPass: {
    height: 50,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    flexDirection: Theme.row,
  },
  iconStyle: {
    alignSelf: Theme.align,
    marginLeft: 10,
  },
  inputWrapper: {
    marginHorizontal: 15,
  },
  CustomButton: {
    height: Theme.hp(6),
    backgroundColor: Theme.primary,
    elevation: 3,
    marginHorizontal: 20,
    borderRadius: 50,
    marginTop: '25%',
    justifyContent: Theme.align,
    alignItems: Theme.align,
  },
  CustomText: {
    color: Theme.white,
    fontSize: Theme.scale(18),
    fontFamily: Fonts.HELODOX_BOLD_FONT,
  },
});

export default styles;
