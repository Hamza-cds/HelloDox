import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Menu from '../Assets/menu';
import Fonts from '../Constants/Fonts';
import Theme from '../Constants/Theme';
import CustomText from './customText';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Appointment = props => {
  const {onPress, dateLabel, nameLabel, source, timeLabel, docCategory} = props;

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
        <CustomText
          SimpleText={true}
          customStyle={{marginTop: 5, color: 'white'}}
          //   label={'DR. ALISHA\n MEHMOOD'}
          label={docCategory}
        />
        <View style={styles.divider}></View>
        <Ionicons
          name="time-outline"
          size={25}
          color={'white'}
          // style={{marginTop: 25}}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <CustomText
            SimpleText={true}
            customStyle={styles.dateText}
            //   label={'Monday, 21 June at 09:20 AM'}
            label={dateLabel}
          />
          <CustomText
            SimpleText={true}
            customStyle={styles.dateText}
            //   label={'Monday, 21 June at 09:20 AM'}
            label={timeLabel}
          />
        </View>
      </View>
    </View>
  );
};

export default Appointment;
const styles = StyleSheet.create({
  appointImage: {height: 120, width: 110, borderRadius: 20},
  docText: {
    fontSize: 18,
    color: Theme.white,
    fontFamily: Fonts.HELODOX_SEMIBOLD_FONT,
    marginTop: 10,
  },
  divider: {
    height: 1,
    backgroundColor: Theme.white,
    width: 145,
    marginVertical: 5,
    marginTop: 5,
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
