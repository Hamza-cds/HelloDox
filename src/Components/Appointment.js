import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Menu from '../Assets/menu';
import Fonts from '../Constants/Fonts';
import Theme from '../Constants/Theme';
import CustomText from './customText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Appointment = props => {
  const {onPress, dateLabel, nameLabel, source} = props;
  let [userData, setuserData] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setuserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
    });
  }, []);

  return (
    <View style={{...props.customView}}>
      <View>
        <Image
          style={styles.appointImage}
          //   source={require('../Assets/Appointment.png')}
          source={source}
        />
      </View>
      <View style={styles.textWrap}>
        <CustomText
          SimpleText={true}
          customStyle={styles.docText}
          //   label={'DR. ALISHA\n MEHMOOD'}
          label={nameLabel}
        />
        <View style={styles.divider}></View>
        <Ionicons name="time-outline" size={25} color={'white'} style={{}} />
        <CustomText
          SimpleText={true}
          customStyle={styles.dateText}
          //   label={'Monday, 21 June at 09:20 AM'}
          label={dateLabel}
        />
      </View>
    </View>
  );
};

export default Appointment;
const styles = StyleSheet.create({
  appointImage: {},
  docText: {
    fontSize: Theme.scale(14),
    color: Theme.white,
    fontFamily: Fonts.HELODOX_SEMIBOLD_FONT,
    marginVertical: 10,
    // backgroundColor: 'red',
    width: 155,
  },
  divider: {
    height: 1,
    backgroundColor: Theme.white,
    width: 145,
    marginVertical: 5,
  },
  dateText: {
    fontSize: Theme.scale(10),
    color: Theme.white,
    fontFamily: Fonts.HELODOX_REGULAR_FONT,
  },
  textWrap: {
    marginRight: 15,
  },
});
