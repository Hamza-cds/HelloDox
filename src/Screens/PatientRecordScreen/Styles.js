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
    width: '80%',
    backgroundColor: Theme.primary,
    marginTop: '10%',
    marginHorizontal: 25,
    borderRadius: 15,
    justifyContent: Theme.align,
    alignItems: Theme.align,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  CustomText: {
    color: Theme.white,
    fontSize: Theme.scale(16),
    fontFamily: Fonts.HELODOX_SEMIBOLD_FONT,
  },
  addText: {
    color: Theme.primary,
    fontSize: Theme.scale(24),
    textAlign: 'center',
    marginTop: 35,
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
  },
  flatView: {
    flexDirection: Theme.row,
    justifyContent: 'space-between',
    marginHorizontal: 30,
    elevation: 2,
    backgroundColor: Theme.white,
    marginVertical: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  imageWrap: {
    flexDirection: Theme.row,
  },
  nameText: {
    marginLeft: 15,
    alignSelf: 'center',
    fontFamily: Fonts.HELODOX_MEDIUM_FONT,
    fontSize: Theme.scale(16),
    color: Theme.black,
  },
  WrapViewSearch: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 20,
    elevation: 2,
    paddingHorizontal: 15,
    backgroundColor: Theme.primary,
    borderRadius: 5,
  },
  iconStyle: {
    alignSelf: 'center',
  },
  InputText: {
    alignSelf: 'center',
    marginLeft: 10,
    flex: 1,
    color: 'black',
  },
});

export default styles;
