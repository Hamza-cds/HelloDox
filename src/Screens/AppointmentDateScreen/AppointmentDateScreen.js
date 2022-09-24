import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  // Button,
} from 'react-native';
import styles from './Styles';
import Notify from '../../Assets/notification';
import DrawerButton from '../../Components/DrawerButton';
import CustomText from '../../Components/customText';
import {Calendar} from 'react-native-calendars';
import Theme from '../../Constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../Components/Button';
import {URL} from '../../Constants/Constant';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const AppointmentDateScreen = props => {
  let docData = props.route.params.DATA;
  console.log('docData', docData);
  let [selectedDate, setSelectedDate] = useState('');
  const [selected, setSelected] = useState(0);
  let [selectedTime, setSelectedTime] = useState('');
  console.log('selectedTime', selectedTime);

  // const Change = () => {
  //   if (selected == 0) {
  //     setSelected(true);
  //   } else {
  //     setSelected(false);
  //   }
  // };
  const handlePageChange = pageNumber => {
    setSelected(pageNumber);
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', moment(date).format());
    hideDatePicker();
  };

  return (
    <View style={styles.Container}>
      <View style={styles.headerView}>
        <View style={styles.headerWrapper}>
          {/* <DrawerButton MenuStyle={styles.MenuStyle} /> */}
        </View>
        <View style={styles.docView}>
          <Image
            style={styles.DocImage}
            source={
              docData
                ? docData.profile_image
                  ? {uri: URL.concat(docData.profile_image)}
                  : require('../../Assets/Doc2.png')
                : require('../../Assets/Doc2.png')
            }
          />
          <View style={styles.docTextView}>
            <CustomText
              SimpleText={true}
              customStyle={styles.docText}
              label={docData ? (docData.name ? docData.name : 'Name') : 'Name'}
            />
            <CustomText
              SimpleText={true}
              customStyle={styles.PhyText}
              label={
                docData
                  ? docData.category.name
                    ? docData.category.name
                    : 'Category Name'
                  : 'Category Name'
              }
            />
          </View>
        </View>
      </View>
      <ScrollView>
        <View>
          <Button
            CustomButton={{...styles.CustomButton, marginTop: 150}}
            CustomText={styles.CustomText}
            label={'Show Date Picker'}
            onPress={showDatePicker}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          {/* <CustomText
            SimpleText={true}
            customStyle={styles.morText}
            label={'Morning'}
          /> */}
          {/* <View style={styles.morningWrap}>
            <ScrollView horizontal={true}>
              <TouchableOpacity
                style={{
                  ...styles.btnTime,
                  backgroundColor: selected == 0 ? Theme.primary : null,
                }}
                onPress={() => {
                  handlePageChange(0);
                  setSelectedTime((selectedTime = '08:30 AM'));
                }}>
                <Ionicons
                  name="time-outline"
                  size={25}
                  color={'black'}
                  style={{alignSelf: 'center', marginLeft: 5}}
                />
                <Text style={styles.timeText}>08:30 AM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.btnTime,
                  backgroundColor: selected == 1 ? Theme.primary : null,
                }}
                onPress={() => {
                  handlePageChange(1);
                  setSelectedTime((selectedTime = '09:00 AM'));
                }}>
                <Ionicons
                  name="time-outline"
                  size={25}
                  color={'black'}
                  style={{alignSelf: 'center', marginLeft: 5}}
                />
                <Text style={styles.timeText}>09:00 AM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.btnTime,
                  backgroundColor: selected == 2 ? Theme.primary : null,
                }}
                onPress={() => {
                  handlePageChange(2);
                  setSelectedTime((selectedTime = '09:30 AM'));
                }}>
                <Ionicons
                  name="time-outline"
                  size={25}
                  color={'black'}
                  style={{alignSelf: 'center', marginLeft: 5}}
                />
                <Text style={styles.timeText}>09:30 AM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.btnTime,
                  backgroundColor: selected == 3 ? Theme.primary : null,
                }}
                onPress={() => {
                  handlePageChange(3);
                  setSelectedTime((selectedTime = '10:00 AM'));
                }}>
                <Ionicons
                  name="time-outline"
                  size={25}
                  color={'black'}
                  style={{alignSelf: 'center', marginLeft: 5}}
                />
                <Text style={styles.timeText}>10:00 AM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.btnTime,
                  backgroundColor: selected == 4 ? Theme.primary : null,
                }}
                onPress={() => {
                  handlePageChange(4);
                  setSelectedTime((selectedTime = '10:30 AM'));
                }}>
                <Ionicons
                  name="time-outline"
                  size={25}
                  color={'black'}
                  style={{alignSelf: 'center', marginLeft: 5}}
                />
                <Text style={styles.timeText}>10:30 AM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.btnTime,
                  backgroundColor: selected == 5 ? Theme.primary : null,
                }}
                onPress={() => {
                  handlePageChange(5);
                  setSelectedTime((selectedTime = '11:00 AM'));
                }}>
                <Ionicons
                  name="time-outline"
                  size={25}
                  color={'black'}
                  style={{alignSelf: 'center', marginLeft: 5}}
                />
                <Text style={styles.timeText}>11:00 AM</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <CustomText
            SimpleText={true}
            customStyle={styles.morText}
            label={'Evening'}
          />
          <View style={styles.morningWrap}>
            <ScrollView horizontal={true}>
              <TouchableOpacity
                style={{
                  ...styles.btnTime,
                  backgroundColor: selected == 6 ? Theme.primary : null,
                }}
                onPress={() => {
                  handlePageChange(6);
                  setSelectedTime((selectedTime = '05:30 PM'));
                }}>
                <Ionicons
                  name="time-outline"
                  size={25}
                  color={'black'}
                  style={{alignSelf: 'center', marginLeft: 5}}
                />
                <Text style={styles.timeText}>05:30 PM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.btnTime,
                  backgroundColor: selected == 7 ? Theme.primary : null,
                }}
                onPress={() => {
                  handlePageChange(7);
                  setSelectedTime((selectedTime = '06:00 PM'));
                }}>
                <Ionicons
                  name="time-outline"
                  size={25}
                  color={'black'}
                  style={{alignSelf: 'center', marginLeft: 5}}
                />
                <Text style={styles.timeText}>06:00 PM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.btnTime,
                  backgroundColor: selected == 8 ? Theme.primary : null,
                }}
                onPress={() => {
                  handlePageChange(8);
                  setSelectedTime((selectedTime = '06:30 PM'));
                }}>
                <Ionicons
                  name="time-outline"
                  size={25}
                  color={'black'}
                  style={{alignSelf: 'center', marginLeft: 5}}
                />
                <Text style={styles.timeText}>06:30 PM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.btnTime,
                  backgroundColor: selected == 9 ? Theme.primary : null,
                }}
                onPress={() => {
                  handlePageChange(9);
                  setSelectedTime((selectedTime = '07:00 PM'));
                }}>
                <Ionicons
                  name="time-outline"
                  size={25}
                  color={'black'}
                  style={{alignSelf: 'center', marginLeft: 5}}
                />
                <Text style={styles.timeText}>07:00 PM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.btnTime,
                  backgroundColor: selected == 10 ? Theme.primary : null,
                }}
                onPress={() => {
                  handlePageChange(10);
                  setSelectedTime((selectedTime = '07:30 PM'));
                }}>
                <Ionicons
                  name="time-outline"
                  size={25}
                  color={'black'}
                  style={{alignSelf: 'center', marginLeft: 5}}
                />
                <Text style={styles.timeText}>07:30 PM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.btnTime,
                  backgroundColor: selected == 11 ? Theme.primary : null,
                }}
                onPress={() => {
                  handlePageChange(11);
                  setSelectedTime((selectedTime = '08:00 PM'));
                }}>
                <Ionicons
                  name="time-outline"
                  size={25}
                  color={'black'}
                  style={{alignSelf: 'center', marginLeft: 5}}
                />
                <Text style={styles.timeText}>08:00 PM</Text>
              </TouchableOpacity>
            </ScrollView>
          </View> */}
          <Button
            CustomButton={styles.CustomButton}
            CustomText={styles.CustomText}
            label={'Make an Appointment'}
            onPress={() =>
              props.navigation.push('AppointmentConfirmScreen', {
                Date: selectedDate,
                Time: selectedTime,
                docData: docData,
              })
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AppointmentDateScreen;
