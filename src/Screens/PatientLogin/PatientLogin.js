import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './Styles';
import PagerView from 'react-native-pager-view';
import Theme from '../../Constants/Theme';
import CustomText from '../../Components/customText';
import TextInputs from '../../Components/TextInputs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../Components/Button';
import Gmail from '../../Assets/gmail';
import Facebook from '../../Assets/facebook';
import Twitter from '../../Assets/twitter';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { doctorLoginApiCall,signUpApiCall} from '../../Apis/Repo';
import {isNullOrEmpty} from '../../Constants/TextUtils';

const PatientLogin = props => {
  const pagerRef = useRef(null);
  const [selectedPage, setSelectedPage] = useState(0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  const [patientLoginEmail, setPatientLoginEmail] = useState('');
  const [patientLoginPassword, setPatientLoginPassword] = useState('');

  const handlePageChange = pageNumber => {
    // setSelectedPage(pageNumber);
    pagerRef.current.setPage(pageNumber);
    // debugger;
    setSelectedPage(pageNumber);
  };
  const onPageScroolEvent = event => {
    setSelectedPage(event.nativeEvent.position);
  };

  const onSignUp = () => {
    if (isNullOrEmpty(name)) {
      alert('Enter Name');
    } else if (isNullOrEmpty(email)) {
      alert('Enter Email');
    } else if (isNullOrEmpty(password)) {
      alert('Enter Password');
    } else if (isNullOrEmpty(address)) {
      alert('Enter Address');
    } else if (isNullOrEmpty(city)) {
      alert('Enter City');
    } else if (isNullOrEmpty(number)) {
      alert('Enter number');
    } else {
      let obj = {
        id: 0,
        email: '',
        password: '',
        role: 0,
        patient: {
          id: 0,
          name: name,
          number: number,
          address: address,
          city: city,
          email: email,
          password: password
        }
      };

      console.log('obj', obj);

      signUpApiCall(obj)
        .then(data => {
          console.log('data', data);

          if (data.data.status == 200 && data.data.success == true) {
            props.navigation.replace('PatientDashboard');
          } else {
            alert(data.message);
            console.log('ADD');
          }
        })
        .catch(err => {
          console.log('err', err);
        });
    }
  };

  const onLogin = () => {
    if (isNullOrEmpty(patientLoginEmail)) {
      alert('Enter Email');
    } else if (isNullOrEmpty(patientLoginPassword)) {
      alert('Enter Password');
    } else {
      let obj = {
        email: patientLoginEmail,
        password: patientLoginPassword,
      };

      doctorLoginApiCall(obj)
        .then(data => {
          console.log('data', data);

          if (data.data.status == 200 && data.data.success == true) {
            props.navigation.replace('PatientDashboard');
          } else {
            alert(data.message);
            console.log('ADD');
          }
        })
        .catch(err => {
          console.log('err', err);
        });
    }
  };



  return (
    <ImageBackground
      style={styles.Container}
      source={require('../../Assets/Commen.png')}>
      <View style={styles.BtnWrapper}>
        <TouchableOpacity onPress={() => handlePageChange(0)}>
          <Text
            style={{
              ...styles.signInText,
              borderBottomColor: selectedPage == 0 ? Theme.primary : null,
              borderBottomWidth: selectedPage == 0 ? 3 : null,
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePageChange(1)}>
          <Text
            style={{
              ...styles.signUpText,
              borderBottomColor: selectedPage == 1 ? Theme.primary : null,
              borderBottomWidth: selectedPage == 1 ? 3 : null,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <PagerView
        style={styles.pagerView}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={event => {
          onPageScroolEvent(event);
        }}>
        {/* This is Sign In Page Start */}

        <View key="1">
          <View>
            <View style={styles.inputContainer}>
              <CustomText
                SimpleText={true}
                customStyle={styles.headText}
                label={'Sign In'}
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
                  setPatientLoginEmail(value);
                }}
                CustomView={styles.WrapViewEmail}
                CustomText={styles.InputText}
                placeholder={'Email Address'}
                placeholderTextColor={Theme.black}
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
                  setPatientLoginPassword(value);
                }}
                CustomView={styles.WrapViewPass}
                CustomText={styles.InputText}
                placeholder={'Password'}
                placeholderTextColor={Theme.black}
              />
              <TouchableOpacity
                onPress={() => props.navigation.push('ForgotScreen')}>
                <CustomText
                  SimpleText={true}
                  customStyle={styles.forgetText}
                  label={'Forgot Password'}
                />
              </TouchableOpacity>
              <Button
                CustomButton={styles.CustomButton}
                CustomText={styles.CustomText}
                label={'Sign In'}
                onPress={() => {
                  onLogin()
                }}
              />
            </View>
            <CustomText
              SimpleText={true}
              customStyle={styles.loginText}
              label={'or login with'}
            />
            <View style={styles.socialWrapper}>
              <TouchableOpacity>
                <Gmail width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Facebook width={50} height={50} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Twitter width={50} height={50} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* This is Sign In Page End */}

        {/* This is Sign up Page Start */}
        <View key="2">
          <ScrollView>
            <View>
              <View style={styles.inputContainer}>
                <CustomText
                  SimpleText={true}
                  customStyle={styles.headText}
                  label={'Sign Up'}
                />
                <TextInputs
                  icon={
                    <Feather
                      style={styles.iconStyle}
                      name={'user'}
                      size={22}
                      color={Theme.black}
                    />
                  }
                  onChange={value => {
                    setName(value);
                  }}
                  CustomView={styles.WrapViewEmail}
                  CustomText={styles.InputText}
                  placeholder={'Name'}
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
                  onChange={value => {
                    setEmail(value);
                  }}
                  CustomView={styles.WrapViewPass}
                  CustomText={styles.InputText}
                  placeholder={'Email'}
                  placeholderTextColor={Theme.black}
                />
                <TextInputs
                  icon={
                    <Feather
                      style={styles.iconStyle}
                      name={'phone'}
                      size={22}
                      color={Theme.black}
                    />
                  }
                  onChange={value => {
                    setNumber(value);
                  }}
                  CustomView={styles.WrapViewPass}
                  CustomText={styles.InputText}
                  placeholder={'Number'}
                  placeholderTextColor={Theme.black}
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
                    setPassword(value);
                  }}
                  CustomView={styles.WrapViewPass}
                  CustomText={styles.InputText}
                  placeholder={'Password'}
                  placeholderTextColor={Theme.black}
                />
                <TextInputs
                  icon={
                    <Ionicons
                      style={styles.iconStyle}
                      name={'location-outline'}
                      size={22}
                      color={Theme.black}
                    />
                  }
                  onChange={value => {
                    setAddress(value);
                  }}
                  CustomView={styles.WrapViewPass}
                  CustomText={styles.InputText}
                  placeholder={'Address'}
                  placeholderTextColor={Theme.black}
                />
                <TextInputs
                  icon={
                    <MaterialCommunityIcons
                      style={styles.iconStyle}
                      name={'city-variant-outline'}
                      size={22}
                      color={Theme.black}
                    />
                  }
                  onChange={value => {
                    setCity(value);
                  }}
                  CustomView={styles.WrapViewPass}
                  CustomText={styles.InputText}
                  placeholder={'City'}
                  placeholderTextColor={Theme.black}
                />

                <Button
                  CustomButton={styles.CustomButton}
                  CustomText={styles.CustomText}
                  label={'Sign Up'}
                  onPress={() => {
                    // props.navigation.replace('PatientDashboard')
                    onSignUp();
                  }}
                />
              </View>
              <CustomText
                SimpleText={true}
                customStyle={styles.loginText}
                label={'or login with'}
              />
              <View style={styles.socialWrapper}>
                <TouchableOpacity>
                  <Gmail width={50} height={50} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Facebook width={50} height={50} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Twitter width={50} height={50} />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </PagerView>
      <View style={styles.termWrapper}>
        <CustomText
          SimpleText={true}
          customStyle={styles.agreeText}
          label={'By signing up,you are agree withot'}
        />
        <CustomText
          SimpleText={true}
          customStyle={styles.termText}
          label={'Terms and conditions'}
        />
      </View>
    </ImageBackground>
  );
};

export default PatientLogin;
