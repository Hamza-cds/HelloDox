import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './Styles';
import Notify from '../../Assets/notification';
import DrawerButton from '../../Components/DrawerButton';
import CustomText from '../../Components/customText';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../Components/Button';
import TextInputs from '../../Components/TextInputs';
import Theme from '../../Constants/Theme';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const AppointmentDateScreen = props => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };
  return (
    <View style={styles.Container}>
      <View style={styles.headerView}>
        <View style={styles.headerWrapper}>
          <DrawerButton MenuStyle={styles.MenuStyle} />
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
            source={require('../../Assets/Doc_photo2.png')}
          />
          <View style={styles.docTextView}>
            <CustomText
              SimpleText={true}
              customStyle={styles.docText}
              label={'DR. ALISHA MEHMOOD'}
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
          <TextInputs
            editable={false}
            CustomView={styles.WrapViewPass}
            CustomText={styles.InputText}
            placeholder={'Date'}
            placeholderTextColor={Theme.black}
          />
          <View>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
          <TouchableOpacity style={styles.dateBtn} onPress={showDatePicker}>
            <Text style={styles.dateText}>Pick the Date</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AppointmentDateScreen;
