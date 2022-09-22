import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Styles';
import TextInputs from '../../Components/TextInputs';
import Feather from 'react-native-vector-icons/Feather';
import Theme from '../../Constants/Theme';
import Button from '../../Components/Button';
import CodeComponent from '../../Components/CodeComponent';
import CustomText from '../../Components/customText';
import {isNullOrEmpty} from '../../Constants/TextUtils';
import {resetPasswordApiCall} from '../../APIs/Repo';

const VarifyScreen = props => {
  console.log('props', props);
  const [code, setCode] = useState('');
  let Email = props.route.params.email;
  let Password = props.route.params.newPass;
  let name = props.route.params.name;
  console.log('name', name);

  const onNext = () => {
    if (isNullOrEmpty(code)) {
      alert('Enter verification code');
    } else {
      let obj = {
        email: Email,
        code: code,
        set_password: Password,
      };
      console.log('obj', obj);

      resetPasswordApiCall(obj)
        .then(data => {
          console.log('data', data);

          if (data.data.status == 200 && data.data.success == true) {
            if (name == 'DocterLogin') {
              props.navigation.replace('DocterDashboard');
            } else {
              props.navigation.replace('PatientDashboard');
            }
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
          label={'Enter the varification code'}
        />
        <View style={{paddingHorizontal: 30, marginTop: 50}}>
          <CodeComponent
            onChange={value => {
              setCode(value);
            }}
            // CustomView={styles.wrapView}
            // CustomInput1={styles.textInput}
            // placeholder={'5'}
            // placeholderTextColor={'black'}
            // maxLength={1}
          />
        </View>
        <CustomText
          SimpleText={true}
          customStyle={styles.ResendText}
          label={'Resend Code'}
        />
        <Button
          CustomButton={styles.CustomButton}
          CustomText={styles.CustomText}
          label={'Next'}
          onPress={() => {
            onNext();
            //  props.navigation.replace('PatientDashboard')
          }}
        />
        {/* <Image
          style={styles.ImageStyle}
          source={require('../../Assets/Varify.png')}
        /> */}
      </View>
    </View>
  );
};

export default VarifyScreen;
