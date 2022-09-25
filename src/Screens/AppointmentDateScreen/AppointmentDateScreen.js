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
    let str = moment(date).format('YYYY-MM-DDTHH:mm:ss');
    setSelectedDate((selectedDate = str));
    console.log('str', str);
    // setSelectedDate((selectedDate = str.replace('+', '.')));
    // console.log('hamza', selectedDate);
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
          <Text
            style={{
              marginTop: 30,
              fontSize: 15,
              color: 'black',
              alignSelf: 'center',
            }}>
            {selectedDate}
          </Text>
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
