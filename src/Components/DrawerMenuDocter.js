import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {scale} from 'react-native-size-matters';
import Fonts from '../Constants/Fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../Constants/Theme';

const DrawerMenuDocter = props => {
  return (
    <View style={styles.Container}>
      <View style={{backgroundColor: Theme.primary, paddingLeft: 30}}>
        <Image
          style={styles.imageStyle}
          source={require('../Assets/user_photo.png')}
        />
        <View style={{marginBottom: '20%'}}>
          <Text style={styles.proText}>Dr. Qaiser Riaz</Text>
          <View style={styles.emailWrapper}>
            <MaterialCommunityIcons
              style={styles.iconStyle}
              name={'email'}
              size={18}
              color={Theme.white}
            />
            <Text style={styles.emailText}>Emergency Physician</Text>
          </View>
        </View>
      </View>
      <DrawerContentScrollView {...props} style={{backgroundColor: '#241332'}}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <TouchableOpacity style={styles.LogBtn}>
          <Text style={styles.LogText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawerMenuDocter;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  imageStyle: {
    height: 70,
    width: 70,
    marginTop: '30%',
  },
  proText: {
    color: '#FFFFFF',
    fontSize: scale(24),
    fontFamily: Fonts.CATERING_FONT_BOLD,
  },
  emailText: {
    color: Theme.white,
    fontSize: scale(16),
    fontFamily: Fonts.CATERING_FONT_REGULAR,
    marginLeft: 5,
  },
  emailWrapper: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  iconStyle: {
    alignSelf: 'center',
  },
  LogBtn: {
    height: 40,
    width: wp(35),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  LogText: {
    fontSize: scale(16),
    color: '#F6F5FB',
    fontFamily: Fonts.CATERING_FONT_BOLD,
  },
});
