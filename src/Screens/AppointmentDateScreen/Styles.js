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
    marginTop: 25,
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
  WrapViewPass: {
    height: 50,
    borderBottomWidth: 1,
    width: '40%',
    flexDirection: Theme.row,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  InputText: {
    fontSize: Theme.scale(15),
    color: Theme.black,
  },
  dateBtn: {
    height: 45,
    backgroundColor: Theme.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 35,
    marginTop: 20,
    borderRadius: 10,
  },
  dateText: {
    fontFamily: Fonts.HELODOX_SEMIBOLD_FONT,
    fontSize: Theme.scale(15),
    color: Theme.white,
  },
});

export default styles;