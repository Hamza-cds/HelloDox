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
import {doctorAppointmentsDashboard} from '../../Apis/Repo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {URL} from '../../Constants/Constant';
import Loader from '../../Components/Loader';

const DocterDashboard = props => {
  let [currentDate, setCurrentDate] = useState('');
  let [userData, setuserData] = useState('');
  let [docAppoint, setDocAppoint] = useState([]);
  const [upStatus, setUpStatus] = useState(1);
  const [upType, setUpType] = useState(2);
  let [doctor, setDoctor] = useState(0);
  const [patient, setPateint] = useState(0);
  var Hamzadate = moment().utcOffset('+05:30').format('YYYY-MM-DDThh:mm:ss');
  const [isLoading, setIsLoading] = useState(false);

  console.log('docAppoint', docAppoint);

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setuserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
      setDoctor((doctor = userData.doctor.id));
      getUpcomingAppointments();
    });
  }, []);

  // useEffect(() => {
  //   getUpcomingAppointments();
  // }, []);

  const getUpcomingAppointments = () => {
    setCurrentDate((currentDate = Hamzadate));

    let obj = {
      doctor: doctor,
      patient: patient,
      status: upStatus,
      type: upType,
      startDate: currentDate,
    };

    setIsLoading(true);
    doctorAppointmentsDashboard(obj)
      .then(data => {
        console.log('data UP', data);

        if (data.data.status == 200 && data.data.success == true) {
          setIsLoading(false);
          setDocAppoint((docAppoint = data.data.result));
        } else {
          setIsLoading(false);
          console.log(data.data.message);
        }
      })
      .catch(err => {
        setIsLoading(false);
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

        <View style={styles.notifyWrap}>
          <Image
            style={styles.ProfileImage}
            source={
              userData
                ? userData.doctor
                  ? userData.doctor.profile_image
                    ? {uri: URL.concat(userData.doctor.profile_image)}
                    : require('../../Assets/EmptyProfile.png')
                  : require('../../Assets/EmptyProfile.png')
                : require('../../Assets/EmptyProfile.png')
            }
          />
        </View>
      </View>
      <View style={styles.InnerContainer}>
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
          {docAppoint.length > 0 ? (
            <FlatList
              data={docAppoint}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <View style={styles.docWrapper}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{height: 110, width: 110, borderRadius: 10}}
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
                      <Text style={styles.patNameText}>
                        {item.patient.name}
                      </Text>
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
          ) : (
            <Text
              style={{
                alignSelf: 'center',
                color: 'black',
                fontSize: 15,
                marginTop: 150,
              }}>
              No record found
            </Text>
          )}
        </View>
      </View>

      {isLoading ? <Loader /> : null}
    </View>
  );
};

export default DocterDashboard;
