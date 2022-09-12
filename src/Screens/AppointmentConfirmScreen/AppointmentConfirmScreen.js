import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import styles from './Styles';
import TextInputs from '../../Components/TextInputs';
import Notify from '../../Assets/notification';
import DrawerButton from '../../Components/DrawerButton';
import CustomText from '../../Components/customText';
import Feather from 'react-native-vector-icons/Feather';
import Theme from '../../Constants/Theme';
import Dental from '../../Assets/dental_Icon';
import Hearct from '../../Assets/heart_Icon';
import Brain from '../../Assets/brain_Icon';
import Appointment from '../../Components/Appointment';
import Button from '../../Components/Button';

const AppointmentConfirmScreen = props => {
  return (
    <View style={styles.Container}>
      <View style={styles.headerWrapper}>
        {/* <DrawerButton
          MenuStyle={styles.MenuStyle}
          onPress={() => props.navigation.openDrawer()}
        /> */}
        <View style={styles.notifyWrap}>
          <Notify width={30} height={30} style={styles.Notify} />
          <Image
            style={styles.ProfileImage}
            source={require('../../Assets/user_photo.png')}
          />
        </View>
      </View>
      <View style={styles.InnerContainer}>
        <Appointment
          customView={styles.customView}
          nameLabel={'DR. ALISHA\nMEHMOOD'}
          dateLabel={'Monday, 21 June at 09:20 AM'}
          source={require('../../Assets/Appointment.png')}
        />
        <Button
          CustomButton={styles.CustomButton}
          CustomText={styles.CustomText}
          label={'Appointment Confirmed'}
          onPress={() => props.navigation.push('PaymentScreen')}
        />
      </View>
    </View>
  );
};

export default AppointmentConfirmScreen;
