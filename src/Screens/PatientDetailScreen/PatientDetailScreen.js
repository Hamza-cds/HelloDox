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
import {concat} from 'react-native-reanimated';
import {URL} from '../../Constants/Constant';

const PatientDetailScreen = props => {
  let data = props.route.params.DATA;
  console.log('data', data);
  return (
    <View style={styles.Container}>
      <View style={styles.headerWrapper}>
        {/* <DrawerButton
          MenuStyle={styles.MenuStyle}
          onPress={() => props.navigation.openDrawer()}
        /> */}
      </View>
      <View style={styles.InnerContainer}>
        <CustomText
          SimpleText={true}
          customStyle={styles.addText}
          label={'Patients Records'}
        />
        <View style={styles.divider}></View>
        <View style={styles.infoWrpper}>
          <Image
            source={
              data
                ? data.patient
                  ? data.patient.profile_image
                    ? {uri: URL.concat(data.patient.profile_image)}
                    : require('../../Assets/user-photo.png')
                  : require('../../Assets/user-photo.png')
                : require('../../Assets/user-photo.png')
            }
            style={styles.imageStyle}
          />
          <CustomText
            SimpleText={true}
            customStyle={styles.nameText}
            label={
              data
                ? data.patient
                  ? data.patient.name
                    ? data.patient.name
                    : null
                  : null
                : null
            }
          />
          <CustomText
            SimpleText={true}
            customStyle={styles.emailText}
            label={
              data
                ? data.patient
                  ? data.patient.number
                    ? data.patient.number
                    : null
                  : null
                : null
            }
          />
        </View>
        <View style={styles.divider}></View>
        <View style={styles.textWrapper}>
          <CustomText
            SimpleText={true}
            customStyle={styles.historyText}
            label={'Patient History'}
          />
          <Text style={styles.loremText}>
            Simulated patients (SP) are extensively used in medical and nursing
            education to allow students to practice and improve their clinical
            and conversational skills for an actual patient encounter.
          </Text>
          <CustomText
            SimpleText={true}
            customStyle={styles.recordText}
            label={'Medical Reorrd'}
          />
          <Text style={styles.loremText}>
            An EHR digitally records a patient’s health information. It includes
            informationally typically found in paper charts as well as vital
            signs, diagnoses, medical history, immunization dates, progress
            notes, lab data, imaging reports, and allergies
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PatientDetailScreen;
