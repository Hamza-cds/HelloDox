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
import DrawerButton from '../../Components/DrawerButton';
import CustomText from '../../Components/customText';
import PagerView from 'react-native-pager-view';
import Theme from '../../Constants/Theme';
import Appointment from '../../Components/Appointment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {URL} from '../../Constants/Constant';
import {getAppointmentDoctorAndPatient} from '../../Apis/Repo';
import moment from 'moment/moment';

const AppointmentsScreen = props => {
  const pagerRef = useRef(null);
  const [selectedPage, setSelectedPage] = useState(0);
  let [userData, setuserData] = useState('');

  let [currentDate, setCurrentDate] = useState('');
  let [upAppoint, setUpAppoint] = useState('');
  let [pastAppoint, setPastAppoint] = useState('');
  const [pastStatus, setPastStatus] = useState(2);
  const [pastType, setPastType] = useState(1);
  const [upStatus, setUpStatus] = useState(1);
  const [upType, setUpType] = useState(2);
  const [doctor, setDoctor] = useState(0);
  let [patient, setPateint] = useState('');
  var Hamzadate = moment().utcOffset('+05:30').format('YYYY-MM-DDThh:mm:ss');

  // console.log('aiouehfhasidhvhasdviodjfjidjgjijadfg', Hamzadate);

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setuserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
      setPateint((patient = userData.patient.id));
    });
  }, []);

  useEffect(() => {
    getPastAppointments();
    getUpcomingAppointments();
  }, [patient]);

  const handlePageChange = pageNumber => {
    // setSelectedPage(pageNumber);
    pagerRef.current.setPage(pageNumber);
    // debugger;
    setSelectedPage(pageNumber);
  };

  const onPageScroolEvent = event => {
    setSelectedPage(event.nativeEvent.position);
  };

  const getUpcomingAppointments = () => {
    // var date = new Date().getDate(); //Current Date
    // var month = new Date().getMonth() + 1; //Current Month
    // var year = new Date().getFullYear(); //Current Year
    // var hours = new Date().getHours(); //Current Hours
    // var min = new Date().getMinutes(); //Current Minutes
    // var sec = new Date().getSeconds(); //Current Seconds
    // setCurrentDate(
    //   (currentDate =
    //     year + '-' + month + '-' + date + 'T' + hours + ':' + min + ':' + sec),
    // );
    setCurrentDate((currentDate = Hamzadate));

    getAppointmentDoctorAndPatient(
      doctor,
      patient,
      upStatus,
      upType,
      currentDate,
    )
      .then(data => {
        console.log('data UP', data);

        if (data.data.status == 200 && data.data.success == true) {
          setUpAppoint((upAppoint = data.data.result));
          // props.navigation.push('PatientDashboard');
        } else {
          alert(data.message);
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const getPastAppointments = () => {
    getAppointmentDoctorAndPatient(
      doctor,
      patient,
      pastStatus,
      pastType,
      currentDate,
    )
      .then(data => {
        console.log('data PAST', data);

        if (data.data.status == 200 && data.data.success == true) {
          setPastAppoint((pastAppoint = data.data.result));
          // props.navigation.push('PatientDashboard');
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
            {upAppoint ? (
              <FlatList
                data={upAppoint}
                style={{}}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  // console.log('item', item)
                  <Appointment
                    customView={styles.customView}
                    nameLabel={item.doctor.name}
                    // nameLabel={'Malik Qaiser Riaz Khoker'}
                    dateLabel={item.start_datetime}
                    source={
                      item
                        ? item.doctor
                          ? item.doctor.profile_image
                            ? {uri: URL.concat(item.doctor.profile_image)}
                            : require('../../Assets/EmptyProfile.png')
                          : require('../../Assets/EmptyProfile.png')
                        : require('../../Assets/EmptyProfile.png')
                    }
                  />
                )}
              />
            ) : (
              <View style={{alignSelf: 'center', marginTop: 80}}>
                <Text style={{color: 'black', fontSize: 15}}>
                  no record found
                </Text>
              </View>
            )}
          </View>
          <View key="2">
            {pastAppoint ? (
              <FlatList
                data={pastAppoint}
                style={{}}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  // console.log('item', item)
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      props.navigation.push('RatingScreen', {
                        data: item,
                      })
                    }>
                    <Appointment
                      customView={styles.customView}
                      nameLabel={item.doctor.name}
                      dateLabel={item.start_datetime}
                      source={
                        item
                          ? item.doctor
                            ? item.doctor.profile_image
                              ? {uri: URL.concat(item.doctor.profile_image)}
                              : require('../../Assets/EmptyProfile.png')
                            : require('../../Assets/EmptyProfile.png')
                          : require('../../Assets/EmptyProfile.png')
                      }
                    />
                  </TouchableOpacity>
                )}
              />
            ) : (
              <View style={{alignSelf: 'center', marginTop: 80}}>
                <Text style={{color: 'black', fontSize: 15}}>
                  no record found
                </Text>
              </View>
            )}
          </View>
        </PagerView>
      </View>
    </View>
  );
};

export default AppointmentsScreen;
