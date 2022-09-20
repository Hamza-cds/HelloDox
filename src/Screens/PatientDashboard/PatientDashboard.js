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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getCategoryDataApiCall, getDoctorDataApiCall} from '../../Apis/Repo';
import {URL} from '../../Constants/Constant';
import {isNullOrEmpty} from '../../Constants/TextUtils';

const PatientDashboard = props => {
  let [userData, setuserData] = useState('');
  let [category, setCategory] = useState([]);
  let [docList, setDocList] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setuserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
    });
  }, []);

  useEffect(() => {
    getCategoryData();
    getDoctorData();
  }, []);

  const getCategoryData = () => {
    getCategoryDataApiCall()
      .then(res => {
        console.log('res', res);
        if (res.status == 200) {
          setCategory((category = res.data.result));
          console.log('category', category);
        } else console.warn('No data found');
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const getDoctorData = () => {
    getDoctorDataApiCall()
      .then(res => {
        console.log('res', res);
        if (res.status == 200) {
          setDocList((docList = res.data.result));
          console.log('doctor', docList);
        } else console.warn('No data found');
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const [data, setData] = useState([
    {
      id: 1,
      Icon: <Dental width={30} height={30} />,
      category: 'Dental',
      total: '10 Docter',
    },
    {
      id: 2,
      Icon: <Hearct width={30} height={30} />,
      category: 'Heart',
      total: '26 Docter',
    },
    {
      id: 3,
      Icon: <Brain width={30} height={30} />,
      category: 'Brain',
      total: '15 Docter',
    },
    {
      id: 4,
      Icon: <Dental width={30} height={30} />,
      category: 'Dental',
      total: '10 Docter',
    },
    {
      id: 5,
      Icon: <Hearct width={30} height={30} />,
      category: 'Heart',
      total: '26 Docter',
    },
    {
      id: 6,
      Icon: <Brain width={30} height={30} />,
      category: 'Brain',
      total: '15 Docter',
    },
  ]);
  const [info, setInfo] = useState([
    {
      id: 1,
      Image: require('../../Assets/Doc2.png'),
      DocName: 'Dr. Hamza',
      Specialization: 'Bone Specialist',
      star: require('../../Assets/Star.png'),
      rating: '2.4',
    },
    {
      id: 2,
      Image: require('../../Assets/Doc2.png'),
      DocName: 'Dr. Frasat',
      Specialization: 'Heart Specialist',
      star: require('../../Assets/Star.png'),
      rating: '2.9',
    },
    {
      id: 3,
      Image: require('../../Assets/Doc2.png'),
      DocName: 'Dr. Sarmad',
      Specialization: 'Emergency Physician',
      star: require('../../Assets/Star.png'),
      rating: '3.4',
    },
    {
      id: 4,
      Image: require('../../Assets/Doc2.png'),
      DocName: 'Dr. Daniyal',
      Specialization: 'Eyes Specialist',
      star: require('../../Assets/Star.png'),
      rating: '2.2',
    },
    {
      id: 5,
      Image: require('../../Assets/Doc2.png'),
      DocName: 'Dr. Ahmed',
      Specialization: 'Dentist Specialist',
      star: require('../../Assets/Star.png'),
      rating: '4.4',
    },
    {
      id: 6,
      Image: require('../../Assets/Doc2.png'),
      DocName: 'Dr. Qaiser',
      Specialization: 'Skin Specialist',
      star: require('../../Assets/Star.png'),
      rating: '3.7',
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
            source={
              userData
                ? userData.patient.profile_image
                  ? {uri: URL.concat(userData.patient.profile_image)}
                  : require('../../Assets/user_photo.png')
                : require('../../Assets/user_photo.png')
            }
          />
        </View>
      </View>
      <View style={styles.InnerContainer}>
        <View style={styles.TextWrapper}>
          <View style={{flexDirection: 'row'}}>
            <CustomText
              SimpleText={true}
              customStyle={styles.hiText}
              label={'Hi, '}
            />
            <CustomText
              SimpleText={true}
              customStyle={styles.hiText}
              label={
                userData
                  ? userData.patient
                    ? userData.patient.name
                      ? userData.patient.name
                      : null
                    : null
                  : null
              }
            />
          </View>
          <CustomText
            SimpleText={true}
            customStyle={styles.WelText}
            label={'Welcome'}
          />
        </View>
        <View style={styles.InputBoxWrapper}>
          <TextInput
            placeholder="Search...."
            placeholderTextColor={'#ABABAB'}
            style={styles.textInputStyle}
          />
          <TouchableOpacity>
            <View style={styles.searchWrapper}>
              <Feather
                style={styles.iconStyle}
                name={'search'}
                size={30}
                color={Theme.white}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.catWprapper}>
            <CustomText
              SimpleText={true}
              customStyle={styles.CatText}
              label={'Category'}
            />
          </View>
          <View style={{marginLeft: 25, marginRight: 15}}>
            <FlatList
              horizontal={true}
              data={category}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity>
                  <View style={styles.FlatView}>
                    <Image
                      style={{height: 30, width: 30}}
                      source={require('../../Assets/doctor.png')}
                    />
                    <Text style={styles.docText}>{item.name}</Text>
                    {/* <Text style={styles.totalText}>{item.total}</Text> */}
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.catWprapper}>
            <CustomText
              SimpleText={true}
              customStyle={styles.CatText}
              label={'Top rate'}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            flex: 1,
          }}>
          <FlatList
            data={docList}
            style={{}}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => props.navigation.push('BookAppointmentScreen')}>
                <View style={styles.docWrapper}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={
                        !isNullOrEmpty(item.profile_image)
                          ? {uri: URL.concat(item.profile_image)}
                          : item.imageStyle
                      }
                      style={styles.imageStyle}
                    />
                    <View style={styles.wrapText}>
                      <Text style={styles.DocNameText}>{item.name}</Text>
                      <Text style={styles.specialText}>
                        {item.category.name}
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={item.star} style={styles.imageStyle} />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default PatientDashboard;
