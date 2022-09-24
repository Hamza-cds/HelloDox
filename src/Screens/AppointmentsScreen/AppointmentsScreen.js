import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './Styles';
import TextInputs from '../../Components/TextInputs';
import Notify from '../../Assets/notification';
import DrawerButton from '../../Components/DrawerButton';
import CustomText from '../../Components/customText';
import PagerView from 'react-native-pager-view';
import Theme from '../../Constants/Theme';
import Appointment from '../../Components/Appointment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {URL} from '../../Constants/Constant';
import {getAppointmentDoctorAndPatient} from '../../Apis/Repo';

const AppointmentsScreen = props => {
  const pagerRef = useRef(null);
  const [selectedPage, setSelectedPage] = useState(0);
  let [userData, setuserData] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setuserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
    });
  }, []);

  const handlePageChange = pageNumber => {
    // setSelectedPage(pageNumber);
    pagerRef.current.setPage(pageNumber);
    // debugger;
    setSelectedPage(pageNumber);
  };

  const onPageScroolEvent = event => {
    setSelectedPage(event.nativeEvent.position);
  };
  return (
    <View style={styles.Container}>
      <View style={styles.headerWrapper}>
        <DrawerButton
          MenuStyle={styles.MenuStyle}
          onPress={() => props.navigation.openDrawer()}
        />
      </View>
      <View style={styles.InnerContainer}>
        <CustomText
          SimpleText={true}
          customStyle={styles.appText}
          label={'Appointments'}
        />
        <View style={styles.userView}>
          <Image
            style={{height: 130, width: 130, borderRadius: 10}}
            source={
              userData
                ? userData.patient
                  ? userData.patient.profile_image
                    ? {uri: URL.concat(userData.patient.profile_image)}
                    : require('../../Assets/user-photo.png')
                  : require('../../Assets/user-photo.png')
                : require('../../Assets/user-photo.png')
            }
          />
          <View style={styles.wrapView}>
            <CustomText
              SimpleText={true}
              customStyle={styles.userTextt}
              label={
                userData
                  ? userData.patient
                    ? userData.patient.name
                      ? userData.patient.name
                      : 'Name'
                    : 'Name'
                  : 'Name'
              }
            />
            <CustomText
              SimpleText={true}
              customStyle={styles.EmailText}
              label={
                userData ? (userData.email ? userData.email : 'email') : 'email'
              }
            />
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.btnWrap}>
          <TouchableOpacity
            style={{
              ...styles.upBtn,
              backgroundColor: selectedPage == 0 ? Theme.primary : Theme.white,
            }}
            onPress={() => handlePageChange(0)}>
            <Text
              style={{
                ...styles.upText,
                color: selectedPage == 0 ? Theme.white : Theme.primary,
              }}>
              Upcomming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.pastBtn,
              backgroundColor: selectedPage == 1 ? Theme.primary : Theme.white,
            }}
            onPress={() => handlePageChange(1)}>
            <Text
              style={{
                ...styles.pastText,
                color: selectedPage == 1 ? Theme.white : Theme.primary,
              }}>
              Past
            </Text>
          </TouchableOpacity>
        </View>
        <PagerView
          style={styles.pagerView}
          initialPage={0}
          ref={pagerRef}
          onPageSelected={event => {
            onPageScroolEvent(event);
          }}>
          <View key="1">
            <ScrollView>
              <Appointment
                customView={styles.customView}
                nameLabel={'DR. ALISHA\nMEHMOOD'}
                dateLabel={'Monday, 21 June at 09:20 AM'}
                source={require('../../Assets/Appointment.png')}
              />
              <Appointment
                customView={styles.customView}
                nameLabel={'DR. SARMAD\nRAZA'}
                dateLabel={'Monday, 21 June at 10:00 AM'}
                source={require('../../Assets/Appointment2.png')}
              />
              <Appointment
                customView={styles.customView}
                nameLabel={'DR. SANIA\nMUGHAL'}
                dateLabel={'Monday, 21 June at 09:20 AM'}
                source={require('../../Assets/Appointment.png')}
              />
            </ScrollView>
          </View>
          <View key="2">
            <ScrollView>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => props.navigation.push('RatingScreen')}>
                <Appointment
                  customView={styles.customView}
                  nameLabel={'DR. ALISHA\nMEHMOOD'}
                  dateLabel={'Monday, 21 June at 09:20 AM'}
                  source={require('../../Assets/Appointment.png')}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </PagerView>
      </View>
    </View>
  );
};

export default AppointmentsScreen;
