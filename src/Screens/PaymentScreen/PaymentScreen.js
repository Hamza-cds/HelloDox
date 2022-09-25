import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import styles from './Styles';
import Notify from '../../Assets/notification';
import Button from '../../Components/Button';
import TextInputs from '../../Components/TextInputs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Theme from '../../Constants/Theme';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomText from '../../Components/customText';
import {PostPaymentApiCall} from '../../Apis/Repo';

const PaymentScreen = props => {
  console.log('props', props);
  const [cardNum, setCardNum] = useState('');
  const [email, setEmail] = useState('');
  let ID = props.route.params.id;
  console.log('cardNum', cardNum);
  // console.log('ID', ID);

  const onConfirm = () => {
    let obj = {
      email: email,
      amount: cardNum,
      order_number: ID,
    };

    PostPaymentApiCall(obj)
      .then(data => {
        console.log('data', data);

        if (data.data.status == 200 && data.data.success == true) {
          props.navigation.push('PatientDashboard');
        } else {
          alert(data.message);
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  return (
    <View style={styles.Container}>
      <View style={styles.headerWrapper}></View>
      <View style={styles.InnerContainer}>
        {/* <Appointment
          customView={styles.customView}
          nameLabel={'DR. ALISHA\nMEHMOOD'}
          dateLabel={'Monday, 21 June at 09:20 AM'}
          source={require('../../Assets/Appointment.png')}
        /> */}
        <CustomText
          SimpleText={true}
          customStyle={styles.appText}
          label={'Payment Method'}
        />

        <TextInputs
          icon={
            <Entypo
              style={styles.iconStyle}
              name={'credit-card'}
              size={22}
              color={Theme.black}
            />
          }
          CustomView={styles.WrapViewEmailCard}
          CustomText={styles.InputText}
          placeholder={'Card Number'}
          onChange={value => {
            setCardNum(value);
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
          CustomView={styles.WrapViewEmail}
          CustomText={styles.InputText}
          placeholder={'Email Address'}
          onChange={value => {
            setEmail(value);
          }}
          placeholderTextColor={Theme.black}
        />
        {/* <TextInputs
          icon={
            <Feather
              style={styles.iconStyle}
              name={'lock'}
              size={22}
              color={Theme.black}
            />
          }
          CustomView={styles.WrapViewEmail}
          CustomText={styles.InputText}
          placeholder={'Password'}
          placeholderTextColor={Theme.black}
          secureTextEntry={true}
        /> */}

        <Button
          CustomButton={styles.CustomButton}
          CustomText={styles.CustomText}
          label={'Save Changes'}
          onPress={() => {
            // props.navigation.push('PatientDashboard')
            onConfirm();
          }}
        />
      </View>
    </View>
  );
};

export default PaymentScreen;
