import React from 'react';
import {StyleSheet} from 'react-native';
import Theme from '../../Constants/Theme';
import Fonts from '../../Constants/Fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

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
  startView: {
    backgroundColor: Theme.primary,
    height: hp(12),
    marginHorizontal: 50,
    marginTop: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  WrapViewNumber: {
    height: 55,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 30,
    marginTop: 50,
  },
  InputText: {
    fontSize: scale(14),
    color: 'black',
    flex: 1,
    fontFamily: Fonts.READYMAID_REGULAR_FONT,
  },
});

export default styles;
