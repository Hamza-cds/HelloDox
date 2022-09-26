import React, {useState, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {URL} from '../Constants/Constant';

const DrawerMenuDocter = props => {
  const {onPress} = props;
  let [userData, setuserData] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setuserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
    });
  }, []);

  return (
    <View style={styles.Container}>
      <View style={{backgroundColor: Theme.primary, paddingLeft: 30}}>
        <Image
          style={styles.imageStyle}
          source={
            userData
              ? userData.doctor
                ? userData.doctor.profile_image
                  ? {uri: URL.concat(userData.doctor.profile_image)}
                  : require('../Assets/EmptyProfile.png')
                : require('../Assets/EmptyProfile.png')
              : require('../Assets/EmptyProfile.png')
            //     : require('../Assets/EmptyProfile.png')
            //   : require('../Assets/EmptyProfile.png')
            // : require('../Assets/EmptyProfile.png')
          }
        />
        <View style={{marginBottom: '20%'}}>
          <Text style={styles.proText}>
            {userData
              ? userData.doctor
                ? userData.doctor.name
                  ? userData.doctor.name
                  : 'Name'
                : 'Name'
              : 'Name'}
          </Text>
          <View style={styles.emailWrapper}>
            <MaterialCommunityIcons
              style={styles.iconStyle}
              name={'email'}
              size={18}
              color={Theme.white}
            />
            <Text style={styles.emailText}>
              {userData
                ? userData.doctor
                  ? userData.doctor.email
                    ? userData.doctor.email
                    : 'Doctor@gmail.com'
                  : 'Doctor@gmail.com'
                : 'Doctor@gmail.com'}
            </Text>
          </View>
        </View>
      </View>
      <DrawerContentScrollView {...props} style={{backgroundColor: '#241332'}}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <TouchableOpacity style={styles.LogBtn} onPress={onPress}>
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
    borderRadius: 10,
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
