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
import ImagePicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {isNullOrEmpty} from '../../Constants/TextUtils';
import {patientSignUpApiCall} from '../../APIs/Repo';
import {URL} from '../../Constants/Constant';

const EditProfilePatient = props => {
  let [userData, setuserData] = useState('');
  const [name, setName] = useState('');

  let [imageName, setImageName] = useState('');
  const [image, setImage] = useState('');

  console.log('imageName', imageName);
  console.log('image', image);

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setuserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
    });
  }, []);

  const UploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      var imageMime = image.mime;
      var name = imageMime.split('/')[1];
      setImageName('helloDoc.' + name);
      setImage(image);
    });
  };

  const onSave = () => {
    let formdata = new FormData();
    formdata.append('id', userData.patient.id);
    formdata.append('user_id_fk', userData.patient.user_id_fk);
    formdata.append('role', 3);
    formdata.append('name', name ? name : userData.patient.name);
    formdata.append('email', userData.patient.email);
    formdata.append('number', userData.patient.number);
    formdata.append('city', userData.patient.city);
    formdata.append('address', userData.patient.address);

    {
      !isNullOrEmpty(image)
        ? formdata.append('file_profile_image', {
            uri: image.path,
            name: imageName,
            type: image.mime,
          })
        : formdata.append(
            'file_profile_image',
            userData.patient.file_profile_image,
          );
    }

    console.log('formdata', formdata);

    patientSignUpApiCall(formdata)
      .then(data => {
        console.log('data', data);

        if (data.data.status == 200 && data.data.success == true) {
          AsyncStorage.setItem('user_data', JSON.stringify(data.data.result));
          props.navigation.replace('PatientLogin');
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
            style={styles.ProfileImage1}
            source={require('../../Assets/user_photo.png')}
          />
        </View> */}
      </View>
      <View style={styles.InnerContainer}>
        <CustomText
          SimpleText={true}
          customStyle={styles.addText}
          label={'Edit Profile'}
        />
        <View style={styles.PicView}>
          <Image
            style={styles.ProfileImage}
            source={
              image
                ? {uri: image.path}
                : userData.patient.profile_image
                ? {uri: URL.concat(userData.patient.profile_image)}
                : require('../../Assets/user-photo.png')
            }
          />
          <TouchableOpacity onPress={UploadImage}>
            <View style={styles.CamView}>
              <AntDesign name="camerao" size={30} color="black" />
            </View>
          </TouchableOpacity>
        </View>
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
            text={
              userData.patient
                ? userData.patient.name
                  ? userData.patient.name
                  : null
                : null
            }
            placeholderTextColor={Theme.black}
            onChange={value => {
              setName(value);
            }}
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
            placeholder={userData.email}
            editable={false}
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
            CustomView={styles.WrapViewPass}
            CustomText={styles.InputText}
            placeholder={'Password'}
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
            CustomView={styles.WrapViewPass}
            CustomText={styles.InputText}
            placeholder={'Confirm Password'}
            placeholderTextColor={Theme.black}
          /> */}
        </View>
        <Button
          CustomButton={styles.CustomButton}
          CustomText={styles.CustomText}
          label={'Confirm'}
          onPress={() => {
            onSave();
            // props.navigation.push('PatientLogin')
          }}
        />
      </View>
    </View>
  );
};

export default EditProfilePatient;
