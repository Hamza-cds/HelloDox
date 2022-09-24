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
import Fontisto from 'react-native-vector-icons/Fontisto';
import Theme from '../../Constants/Theme';
import Button from '../../Components/Button';
import Fonts from '../../Constants/Fonts';
import {patientContactUsApiCall} from '../../Apis/Repo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ContactUsScreen = props => {
  let [userData, setuserData] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setuserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
    });
  }, []);

  const onSubmit = () => {
    let obj = {
      id: 0,
      name: name,
      email: email,
      message: msg,
    };
    patientContactUsApiCall(obj)
      .then(data => {
        console.log('data', data);

        if (data.data.status == 200 && data.data.success == true) {
          props.navigation.replace('DocterDashboard');
        } else {
          alert(data.message);
          console.log('ADD');
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
        {/* <View style={styles.notifyWrap}>
          <Notify width={30} height={30} style={styles.Notify} />
          <Image
            style={styles.ProfileImage}
            source={require('../../Assets/user_photo.png')}
          />
        </View> */}
      </View>
      <View style={styles.InnerContainer}>
        <CustomText
          SimpleText={true}
          customStyle={styles.addText}
          label={'Contact Us'}
        />
        <View style={styles.inputWrapper}>
          <TextInputs
            icon={
              <Feather
                style={styles.iconStyle}
                name={'user'}
                size={22}
                color={Theme.black}
              />
            }
            CustomView={styles.WrapViewEmail}
            CustomText={styles.InputText}
            placeholder={'Name'}
            onChange={value => {
              setName(value);
            }}
            placeholderTextColor={Theme.black}
          />
          <TextInputs
            icon={
              <Fontisto
                style={styles.iconStyle}
                name={'email'}
                size={22}
                color={Theme.black}
              />
            }
            CustomView={styles.WrapViewPass}
            CustomText={styles.InputText}
            placeholder={'Email'}
            onChange={value => {
              setEmail(value);
            }}
            placeholderTextColor={Theme.black}
          />
          {/* <TextInput
            multiline={true}
            numberOfLines={10}
            placeholder={'Enter Message...'}
            onChange={value => {
              setMsg(value);
              console.log(value);
            }}
            placeholderTextColor={Theme.black}
            style={{
              height: 200,
              textAlignVertical: 'top',
              marginVertical: 20,
              backgroundColor: Theme.white,
              elevation: 3,
              paddingLeft: 10,
              borderRadius: 10,
              marginHorizontal: 10,
              fontFamily: Fonts.HELODOX_REGULAR_FONT,
              fontSize: Theme.scale(14),
              color: Theme.black,
            }}
          /> */}
          <TextInputs
            CustomView={{
              height: 100,
              textAlignVertical: 'top',
              marginVertical: 10,
              backgroundColor: Theme.white,
              elevation: 3,
              paddingLeft: 10,
              borderRadius: 10,
              marginHorizontal: 10,
              fontFamily: Fonts.HELODOX_REGULAR_FONT,
              fontSize: Theme.scale(14),
              color: Theme.black,
            }}
            CustomText={styles.InputText}
            placeholder={'Enter Message...'}
            placeholderTextColor={Theme.black}
            onChange={value => {
              setMsg(value);
              console.log(value);
            }}
          />
        </View>
        <Button
          CustomButton={styles.CustomButton}
          CustomText={styles.CustomText}
          label={'Submit'}
          onPress={() => {
            onSubmit();
            // props.navigation.push('PatientLogin')
          }}
        />
      </View>
    </View>
  );
};

export default ContactUsScreen;
