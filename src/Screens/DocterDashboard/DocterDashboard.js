import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './Styles';
import TextInputs from '../../Components/TextInputs';
import Feather from 'react-native-vector-icons/Feather';
import Theme from '../../Constants/Theme';
import Button from '../../Components/Button';
import CodeComponent from '../../Components/CodeComponent';
import CustomText from '../../Components/customText';
import Notify from '../../Assets/notification';
import Icon from '../../Assets/Icon_time';
import Location from '../../Assets/Icon_locate';
import Dot from '../../Assets/Icon_dots';
import DrawerButton from '../../Components/DrawerButton';
import moment from 'moment';
import {getAppointmentDoctorAndPatient} from '../../Apis/Repo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {URL} from '../../Constants/Constant';

const DocterDashboard = props => {
  let [currentDate, setCurrentDate] = useState('');
  let [userData, setuserData] = useState('');
  let [upAppoint, setUpAppoint] = useState('');
  const [upStatus, setUpStatus] = useState(1);
  const [upType, setUpType] = useState(2);
  let [doctor, setDoctor] = useState(0);
  const [patient, setPateint] = useState(0);
  var Hamzadate = moment().utcOffset('+05:30').format('YYYY-MM-DDThh:mm:ss');

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setuserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
      setDoctor((doctor = userData.doctor.id));
    });
  }, []);

  useEffect(() => {
    getUpcomingAppointments();
  }, [patient]);

  const getUpcomingAppointments = () => {
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

  const [info, setInfo] = useState([
    {
      id: 1,
      Image: require('../../Assets/Doc2.png'),
      PatName: 'Hamza Rajput',
      time: '17 june 2022, 09:30 AM',
      star: require('../../Assets/Star.png'),
      rating: '2.4',
      color: '#D2E6FF',
    },
    {
      id: 2,
      Image: require('../../Assets/Doc2.png'),
      PatName: 'Frasat Mughal',
      time: '17 june 2022, 09:30 AM',
      star: require('../../Assets/Star.png'),
      rating: '2.9',
      color: '#FCF1D6',
    },
    {
      id: 3,
      Image: require('../../Assets/Doc2.png'),
      PatName: 'Sarmad Raza',
      time: '18 june 2022, 10:30 AM',
      star: require('../../Assets/Star.png'),
      rating: '3.4',
      color: '#F9D8D9',
    },
    {
      id: 4,
      Image: require('../../Assets/Doc2.png'),
      PatName: 'Daniyal pirzada',
      time: '18 june 2022, 11:30 AM',
      star: require('../../Assets/Star.png'),
      rating: '2.2',
      color: '#D2E6FF',
    },
    {
      id: 5,
      Image: require('../../Assets/Doc2.png'),
      PatName: 'Ahmed bhatti',
      time: '19 june 2022, 100:30 AM',
      star: require('../../Assets/Star.png'),
      rating: '4.4',
      color: '#FCF1D6',
    },
    {
      id: 6,
      Image: require('../../Assets/Doc2.png'),
      PatName: 'Qaiser Malik',
      time: '20 june 2022, 09:30 AM',
      star: require('../../Assets/Star.png'),
      rating: '3.7',
      color: '#F9D8D9',
    },
  ]);
  return (
    <View style={styles.Container}>
      <View style={styles.headerWrapper}>
        <DrawerButton
          MenuStyle={styles.MenuStyle}
          onPress={() => props.navigation.openDrawer()}
        />
        <View style={styles.notifyWrap}>
          <TouchableOpacity
            onPress={() => props.navigation.push('DocterProfileScreen')}>
            <Image
              style={styles.ProfileImage}
              source={require('../../Assets/Doc_photo.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.InnerContainer}>
        {/* <CustomText
          SimpleText={true}
          customStyle={styles.docText}
          label={'Docters Profile'}
        /> */}
        {/* <View style={styles.appointmentwrap}>
          <View style={styles.requestWrap}>
            <CustomText
              SimpleText={true}
              customStyle={styles.appointText}
              label={'Appointment Request'}
            />
            <View style={styles.timeRwap}>
              <Icon width={25} height={25} style={styles.icon} />
              <CustomText
                SimpleText={true}
                customStyle={styles.dateText}
                label={'16 june 2022, 10:30 AM'}
              />
            </View>
          </View>
          <View style={styles.nameNlocatinWrap}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.designView}></View>
              <View style={styles.wrapper}>
                <CustomText
                  SimpleText={true}
                  customStyle={styles.nameText}
                  label={'Hamza Arshad'}
                />
                <View style={styles.locationWrap}>
                  <Location width={20} height={20} style={styles.iconStyle} />
                  <CustomText
                    SimpleText={true}
                    customStyle={styles.locationText}
                    label={'Nishat, Lhr'}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.iconStyle}>
              <Dot width={20} height={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.btnWrap}>
            <Button
              CustomButton={styles.accepButton}
              CustomText={styles.acceptText}
              label={'Accept'}
              // onPress={() => props.navigation.replace('PatientDashboard')}
            />
            <Button
              CustomButton={styles.deleteButton}
              CustomText={styles.deteleText}
              label={'Decline'}
              // onPress={() => props.navigation.replace('PatientDashboard')}
            />
          </View>
        </View> */}
        <CustomText
          SimpleText={true}
          customStyle={styles.appText}
          label={'Appointments'}
        />
        <View
          style={{
            marginTop: 10,
            flex: 1,
          }}>
          <FlatList
            data={upAppoint}
            style={{}}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.docWrapper}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 100, width: 100}}
                    source={
                      item
                        ? item.patient
                          ? item.patient.profile_image
                            ? {uri: URL.concat(item.patient.profile_image)}
                            : require('../../Assets/user-photo.png')
                          : require('../../Assets/user-photo.png')
                        : require('../../Assets/user-photo.png')
                    }
                  />
                  {/* <View
                    style={{
                      ...styles.designView,
                      backgroundColor: item.color,
                    }}></View> */}
                  <View style={styles.wrapText}>
                    <Text style={styles.patNameText}>{item.patient.name}</Text>
                    <Text style={styles.specialText}>
                      {item.start_datetime}
                    </Text>
                  </View>
                </View>
                {/* <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={styles.iconStyle}>
                    <Dot width={20} height={20} />
                  </TouchableOpacity>
                </View> */}
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default DocterDashboard;
