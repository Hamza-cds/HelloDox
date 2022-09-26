import React, {useState, useEffect} from 'react';
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
import {URL} from '../../Constants/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PatientBookAppointmentApiCall} from '../../Apis/Repo';

const AppointmentConfirmScreen = props => {
  console.log('props', props);
  let Date = props.route.params.Date;
  let DATA = props.route.params.docData;
  let [userData, setuserData] = useState('');
  let [Id, setID] = useState('');
  console.log('DATA', DATA);

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setuserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
    });
  }, []);

  const onConfirm = () => {
    let obj = {
      id: 0,
      patient_id_fk: userData.patient.id,
      doctor_id_fk: DATA.id,
      category_id_fk: DATA.category.id,
      fee: DATA.fee,
      rate: 0,
      start_datetime: Date,
      end_datetime: Date,
      status: 1,
      patient: null,
    };
    console.log('obj', obj);
    // props.navigation.push('PaymentScreen');

    PatientBookAppointmentApiCall(obj)
      .then(data => {
        console.log('data', data);

        if (data.data.status == 200 && data.data.success == true) {
          setID((Id = data.data.result.id));
          props.navigation.push('PaymentScreen', {
            id: Id,
          });
        } else {
          alert(data.message);
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  return (
    <View style={styles.Container}>
      <View style={styles.headerWrapper}>
        <View style={styles.notifyWrap}>
          <Image
            style={styles.ProfileImage}
            source={
              userData
                ? userData.patient.profile_image
                  ? {uri: URL.concat(userData.patient.profile_image)}
                  : require('../../Assets/Doc2.png')
                : require('../../Assets/Doc2.png')
            }
          />
        </View>
      </View>
      <View style={styles.InnerContainer}>
        <Appointment
          customView={styles.customView}
          nameLabel={DATA.name}
          // nameLabel={'Malik Qaiser Riaz Khoker'}
          dateLabel={Date}
          // docCategory={DATA.category.name}
          source={
            DATA
              ? DATA.profile_image
                ? {uri: URL.concat(DATA.profile_image)}
                : require('../../Assets/Doc2.png')
              : require('../../Assets/Doc2.png')
          }
        />
        <Button
          CustomButton={styles.CustomButton}
          CustomText={styles.CustomText}
          label={'Appointment Confirmed'}
          onPress={() => {
            // props.navigation.push('PaymentScreen')
            onConfirm();
          }}
        />
      </View>
    </View>
  );
};

export default AppointmentConfirmScreen;
