import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Styles';
import TextInputs from '../../Components/TextInputs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Theme from '../../Constants/Theme';
import Button from '../../Components/Button';
import CustomText from '../../Components/customText';
import {generateCodeApiCall} from '../../Apis/Repo';
import {isNullOrEmpty, stringsNotEqual} from '../../Constants/TextUtils';
import Feather from 'react-native-vector-icons/Feather';

const ForgotScreen = props => {
  const [email, setEmail] = useState('');
  const [newPass, setNewPass] = useState('');
  const [conNewPass, setConNewPass] = useState('');
  let name = props.route.params.name;
  const onVerify = () => {
    if (isNullOrEmpty(email)) {
      alert('Enter Email');
    } else if (isNullOrEmpty(newPass)) {
      alert('Enter New Password');
    } else if (isNullOrEmpty(conNewPass)) {
      alert('Enter confirm password');
    } else if (stringsNotEqual(newPass, conNewPass)) {
      alert('password and confirm password does not match');
    } else {
      let obj = {
        email: email,
      };

      generateCodeApiCall(obj)
        .then(data => {
          console.log('data', data);

          if (data.data.status == 200 && data.data.success == true) {
            props.navigation.navigate('VarifyScreen', {
              newPass: newPass,
              email: email,
              name: name,
            });
          } else {
            alert(data.data.message);
            console.log('ADD');
          }
        })
        .catch(err => {
          console.log('err', err);
        });
    }
  };

  return (
    <View style={styles.Container}>
      <View style={styles.InnerContainer}>
        <CustomText
          SimpleText={true}
          customStyle={styles.VerifyText}
          label={'Enter your email and set New Password'}
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
          onChange={value => {
            setEmail(value);
          }}
          CustomView={styles.WrapViewPass}
          CustomText={styles.InputText}
          placeholder={'email'}
          placeholderTextColor={Theme.black}
          color="black"
          // keyboardType={'email'}
        />

        <TextInputs
          icon={
            <Feather
              style={styles.iconStyle}
              name={'lock'}
              size={22}
              color={Theme.black}
            />
          }
          onChange={value => {
            setNewPass(value);
          }}
          CustomView={{
            height: 50,
            borderBottomWidth: 1,
            marginHorizontal: 25,
            flexDirection: Theme.row,
          }}
          CustomText={styles.InputText}
          placeholder={'New Pasword'}
          placeholderTextColor={Theme.black}
          secureTextEntry={true}
          color="black"
          // keyboardType={'email'}
        />

        <TextInputs
          icon={
            <Feather
              style={styles.iconStyle}
              name={'lock'}
              size={22}
              color={Theme.black}
            />
          }
          onChange={value => {
            setConNewPass(value);
          }}
          CustomView={{
            height: 50,
            borderBottomWidth: 1,
            marginHorizontal: 25,
            flexDirection: Theme.row,
          }}
          CustomText={styles.InputText}
          placeholder={'Confirm New Password'}
          placeholderTextColor={Theme.black}
          secureTextEntry={true}
          color="black"
          // keyboardType={'email'}
        />

        <Button
          CustomButton={styles.CustomButton}
          CustomText={styles.CustomText}
          label={'Varify'}
          onPress={() => {
            onVerify();
          }}
        />
        {/* <Image
          style={styles.ImageStyle}
          source={require('../../Assets/Forget.png')}
        /> */}
      </View>
    </View>
  );
};

export default ForgotScreen;
