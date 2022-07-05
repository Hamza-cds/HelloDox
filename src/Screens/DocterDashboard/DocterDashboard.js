import React, {useState} from 'react';
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

const DocterDashboard = props => {
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
        <DrawerButton MenuStyle={styles.MenuStyle} />
        <View style={styles.notifyWrap}>
          <Notify width={35} height={35} style={styles.Notify} />
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
        <CustomText
          SimpleText={true}
          customStyle={styles.docText}
          label={'Docters Profile'}
        />
        <View style={styles.appointmentwrap}>
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
        </View>
        <View
          style={{
            marginTop: 10,
            flex: 1,
          }}>
          <FlatList
            data={info}
            style={{}}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.docWrapper}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      ...styles.designView,
                      backgroundColor: item.color,
                    }}></View>
                  <View style={styles.wrapText}>
                    <Text style={styles.patNameText}>{item.PatName}</Text>
                    <Text style={styles.specialText}>{item.time}</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={styles.iconStyle}>
                    <Dot width={20} height={20} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default DocterDashboard;
