import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './Styles';
import TextInputs from '../../Components/TextInputs';
import Notify from '../../Assets/notification';
import DrawerButton from '../../Components/DrawerButton';
import CustomText from '../../Components/customText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Theme from '../../Constants/Theme';
import CheckBox from 'react-native-check-box';
import Button from '../../Components/Button';
import {getAppointmentDoctor} from '../../Apis/Repo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import {URL} from '../../Constants/Constant';

const PatientRecordScreen = props => {
  let [currentDate, setCurrentDate] = useState('');
  let [userData, setuserData] = useState('');
  let [upAppoint, setUpAppoint] = useState('');
  const [upStatus, setUpStatus] = useState(1);
  const [upType, setUpType] = useState(2);
  let [doctor, setDoctor] = useState('');
  const [patient, setPateint] = useState(0);
  const [name, setName] = useState('');
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
  }, [doctor]);

  const getUpcomingAppointments = () => {
    setCurrentDate((currentDate = Hamzadate));

    getAppointmentDoctor(
      doctor,
      patient,
      upStatus,
      upType,
      currentDate,
      name ? name : '%20',
    )
      .then(data => {
        console.log('data UP', data);

        if (data.data.status == 200 && data.data.success == true) {
          setUpAppoint((upAppoint = data.data.result));
          // props.navigation.push('PatientDashboard');
        } else {
          // alert(data.message);
          console.log('data.message');
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  console.log('name', name);

  const [selectedItem, setSelectedItem] = useState({
    id: 1,
    Image: require('../../Assets/user_photo.png'),
    Name: 'Hamza Rajput',
    Icon: <MaterialIcons name="done-all" size={25} color="black" />,
  });
  const [info, setInfo] = useState([
    {
      id: 1,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Hamza Rajput',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
    {
      id: 2,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Qaiser Malik',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
    {
      id: 3,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Ashar Arain',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
    {
      id: 4,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Farasat Mughal',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
    {
      id: 5,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Sarmad Raza',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
    {
      id: 6,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Sarmad Raza',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
    {
      id: 7,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Sarmad Raza',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
    {
      id: 8,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Sarmad Raza',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
    {
      id: 9,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Sarmad Raza',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
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
        {/* <TextInputs
          icon={
            <Feather
              style={{position: 'absolute', right: 10, top: 10}}
              name={'search'}
              size={25}
              color={Theme.black}
            />
          }
          CustomView={styles.WrapViewSearch}
          CustomText={styles.InputText}
          placeholder={'Search...'}
          onChange={value => {
            setName(value);
            getUpcomingAppointments();
          }}
          placeholderTextColor={Theme.black}
        /> */}
        <View
          style={{
            backgroundColor: '#F0F0F0',
            marginHorizontal: 20,
            height: 50,
            // paddingRight: 0,
            flexDirection: 'row',
            borderRadius: 10,
            marginVertical: 20,
          }}>
          <TextInput
            style={{
              marginLeft: 15,
              marginVertical: 5,
              height: 40,
              borderColor: 'black',
              // borderWidth: 1,
            }}
            underlineColorAndroid="transparent"
            placeholder="Search..."
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={setName}
            color="black"
          />
          <TouchableOpacity
            style={{position: 'absolute', right: 10, top: 10}}
            onPress={() => {
              getUpcomingAppointments();
            }}>
            <Feather
              // style={{position: 'absolute', right: 10, top: 10}}
              name={'search'}
              size={25}
              color={Theme.black}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <FlatList
            data={upAppoint}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.flatView}
                onPress={() =>
                  props.navigation.push('PatientDetailScreen', {
                    DATA: item,
                  })
                }>
                <View style={styles.imageWrap}>
                  <Image
                    style={{height: 50, width: 50}}
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
                  <Text style={styles.nameText}>{item.patient.name}</Text>
                </View>

                <View style={{alignSelf: 'center'}}>
                  <Text>{item.patient.city}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* <Button
          CustomButton={styles.CustomButton}
          CustomText={styles.CustomText}
          label={'Access'}
          onPress={() => props.navigation.push('PatientDetailScreen')}
        /> */}
      </View>
    </View>
  );
};

export default PatientRecordScreen;
