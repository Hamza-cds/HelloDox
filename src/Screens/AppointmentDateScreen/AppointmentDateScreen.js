import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './Styles';
import Notify from '../../Assets/notification';
import DrawerButton from '../../Components/DrawerButton';
import CustomText from '../../Components/customText';
import {Calendar} from 'react-native-calendars';
import Theme from '../../Constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../Components/Button';

const AppointmentDateScreen = props => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selected, setSelected] = useState(0);
  const [selected2, setSelected2] = useState(1);

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
  const handlePageChange2 = pageNumber2 => {
    setSelected2(pageNumber2);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.headerView}>
        <View style={styles.headerWrapper}>
          {/* <DrawerButton MenuStyle={styles.MenuStyle} /> */}
          <View style={styles.notifyWrap}>
            <Notify width={30} height={30} style={styles.Notify} />
            <Image
              style={styles.ProfileImage}
              source={require('../../Assets/user_photo.png')}
            />
          </View>
        </View>
        <View style={styles.docView}>
          <Image
            style={styles.DocImage}
            source={require('../../Assets/Doc2.png')}
          />
          <View style={styles.docTextView}>
            <CustomText
              SimpleText={true}
              customStyle={styles.docText}
              label={'DR. HAMZA ARSHAD'}
            />
            <CustomText
              SimpleText={true}
              customStyle={styles.PhyText}
              label={'Emergency Physician'}
            />
            <Image
              style={styles.startImage}
              source={require('../../Assets/star_icons.png')}
            />
          </View>
        </View>
      </View>
      <ScrollView>
        <View>
          <Calendar
            style={{marginTop: 25, marginHorizontal: 10}}
            markingType={'custom'}
            markedDates={{
              [selectedDate]: {
                customStyles: {
                  container: {
                    height: 35,
                    width: 35,
                    borderRadius: 5,
                    backgroundColor: Theme.primary,
                  },
                  text: {
                    color: 'white',
                    fontWeight: 'bold',
                  },
                },
              },
            }}
            onDayPress={day => {
              console.log('selected day', day);
              setSelectedDate(day.dateString);
              console.log('Selected Date', selectedDate);
            }}
            onDayLongPress={day => {
              console.log('selected day', day);
              setSelectedDate(day.dateString);
              console.log('Selected Date', selectedDate);
            }}
            monthFormat={'DD-MM-YYYY'}
            onMonthChange={month => {
              console.log('month changed', month);
              // setSelectedMonth(month.month);
              // console.log('Date month', selectedMonth);
            }}
            hideArrows={false}
            hideExtraDays={true}
            disableMonthChange={false}
            hideDayNames={false}
            showWeekNumbers={false}
            onPressArrowLeft={subtractMonth => subtractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            disableArrowLeft={false}
            disableArrowRight={false}
            disableAllTouchEventsForDisabledDays={true}
            renderHeader={date => {
              return <Text style={styles.dateHeader}>{selectedDate}</Text>;
            }}
            enableSwipeMonths={true}
          />
          <CustomText
            SimpleText={true}
            customStyle={styles.morText}
            label={'Morning'}
          />
          <View style={styles.morningWrap}>
            <ScrollView horizontal={true}>
              <TouchableOpacity
                style={{
                  ...styles.btnTime,
                  backgroundColor: selected == 0 ? Theme.primary : null,
                }}
                onPress={() => handlePageChange(0)}>
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
                onPress={() => handlePageChange(1)}>
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
                onPress={() => handlePageChange(2)}>
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
                onPress={() => handlePageChange(3)}>
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
                onPress={() => handlePageChange(4)}>
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
                onPress={() => handlePageChange(5)}>
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
                  backgroundColor: selected2 == 0 ? Theme.primary : null,
                }}
                onPress={() => handlePageChange2(0)}>
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
                  backgroundColor: selected2 == 1 ? Theme.primary : null,
                }}
                onPress={() => handlePageChange2(1)}>
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
                  backgroundColor: selected2 == 2 ? Theme.primary : null,
                }}
                onPress={() => handlePageChange2(2)}>
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
                  backgroundColor: selected2 == 3 ? Theme.primary : null,
                }}
                onPress={() => handlePageChange2(3)}>
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
                  backgroundColor: selected2 == 4 ? Theme.primary : null,
                }}
                onPress={() => handlePageChange2(4)}>
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
                  backgroundColor: selected2 == 5 ? Theme.primary : null,
                }}
                onPress={() => handlePageChange2(5)}>
                <Ionicons
                  name="time-outline"
                  size={25}
                  color={'black'}
                  style={{alignSelf: 'center', marginLeft: 5}}
                />
                <Text style={styles.timeText}>08:00 PM</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <Button
            CustomButton={styles.CustomButton}
            CustomText={styles.CustomText}
            label={'Make an Appointment'}
            onPress={() => props.navigation.push('AppointmentConfirmScreen')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AppointmentDateScreen;
