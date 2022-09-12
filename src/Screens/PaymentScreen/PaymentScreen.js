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
import Notify from '../../Assets/notification';
import Button from '../../Components/Button';
import TextInputs from '../../Components/TextInputs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Theme from '../../Constants/Theme';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomText from '../../Components/customText';

const PaymentScreen = props => {
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
        {/* <Appointment
          customView={styles.customView}
          nameLabel={'DR. ALISHA\nMEHMOOD'}
          dateLabel={'Monday, 21 June at 09:20 AM'}
          source={require('../../Assets/Appointment.png')}
        /> */}
        <CustomText
          SimpleText={true}
          customStyle={styles.appText}
          label={'Payment Method'}
        />

        <TextInputs
          icon={
            <Entypo
              style={styles.iconStyle}
              name={'credit-card'}
              size={22}
              color={Theme.black}
            />
          }
          CustomView={styles.WrapViewEmailCard}
          CustomText={styles.InputText}
          placeholder={'Card Number'}
          placeholderTextColor={Theme.black}
        />
        <TextInputs
          icon={
            <Fontisto
              style={styles.iconStyle}
              name={'email'}
              size={22}
              color={Theme.black}
            />
          }
          CustomView={styles.WrapViewEmail}
          CustomText={styles.InputText}
          placeholder={'Email Address'}
          placeholderTextColor={Theme.black}
        />
        <TextInputs
          icon={
            <Feather
              style={styles.iconStyle}
              name={'lock'}
              size={22}
              color={Theme.black}
            />
          }
          CustomView={styles.WrapViewEmail}
          CustomText={styles.InputText}
          placeholder={'Password'}
          placeholderTextColor={Theme.black}
          secureTextEntry={true}
        />

        <Button
          CustomButton={styles.CustomButton}
          CustomText={styles.CustomText}
          label={'Save Changes'}
          onPress={() => props.navigation.push('PatientDashboard')}
        />
      </View>
    </View>
  );
};

export default PaymentScreen;
