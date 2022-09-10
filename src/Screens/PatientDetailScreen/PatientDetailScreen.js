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

const PatientDetailScreen = props => {
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
        <CustomText
          SimpleText={true}
          customStyle={styles.addText}
          label={'Patients Records'}
        />
        <View style={styles.divider}></View>
        <View style={styles.infoWrpper}>
          <Image
            source={require('../../Assets/user-photo.png')}
            style={styles.imageStyle}
          />
          <CustomText
            SimpleText={true}
            customStyle={styles.nameText}
            label={'Hamza Rajput'}
          />
          <CustomText
            SimpleText={true}
            customStyle={styles.emailText}
            label={'abc123@gmail.com'}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <CustomText
            SimpleText={true}
            customStyle={styles.recordText}
            label={'Medical Reorrd'}
          />
          <Text style={styles.loremText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PatientDetailScreen;
