import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
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
import Octicons from 'react-native-vector-icons/Octicons';
import Fonts from '../../Constants/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfileDocter = props => {
  const [userData, setuserData] = useState('');
  let [imageName, setImageName] = useState('');
  const [image, setImage] = useState('');
  console.log('imageName', imageName);
  console.log('image', image);
  console.log('userdata', userData);

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
      // setImage(image.path);
      var imageMime = image.mime;
      var name = imageMime.split('/')[1];
      setImageName('Vinvi.' + name);
      setImage(image);
    });
  };
  return (
    <View style={styles.Container}>
      <View style={styles.headerWrapper}>
        <DrawerButton
          MenuStyle={styles.MenuStyle}
          onPress={() => props.navigation.openDrawer()}
        />
        <View style={styles.notifyWrap}>
          <Notify width={30} height={30} style={styles.Notify} />
          <Image
            style={styles.ProfileImage1}
            source={require('../../Assets/user_photo.png')}
          />
        </View>
      </View>
      <View style={styles.InnerContainer}>
        <ScrollView>
          <CustomText
            SimpleText={true}
            customStyle={styles.addText}
            label={'Edit Profile'}
          />
          <View style={styles.PicView}>
            <Image
              style={styles.ProfileImage}
              source={require('../../Assets/user-photo.png')}
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
            />
            <TextInputs
              icon={
                <Octicons
                  style={styles.iconStyle}
                  name={'workflow'}
                  size={20}
                  color={Theme.black}
                />
              }
              CustomView={styles.WrapViewPass}
              CustomText={styles.InputText}
              placeholder={'Specialization'}
              placeholderTextColor={Theme.black}
            />
            <TextInput
              multiline={true}
              numberOfLines={10}
              placeholder={'Diseases Related to Physician'}
              placeholderTextColor={Theme.black}
              style={styles.textArea}
            />
            <TextInput
              multiline={true}
              numberOfLines={10}
              placeholder={'Work Experience'}
              placeholderTextColor={Theme.black}
              style={{
                height: 150,
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
            />
            <TextInput
              multiline={true}
              numberOfLines={10}
              placeholder={'About Me'}
              placeholderTextColor={Theme.black}
              style={{
                height: 200,
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
            />
          </View>
          <Button
            CustomButton={styles.CustomButton}
            CustomText={styles.CustomText}
            label={'Confirm'}
            onPress={() => props.navigation.push('DocterLogin')}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default EditProfileDocter;
