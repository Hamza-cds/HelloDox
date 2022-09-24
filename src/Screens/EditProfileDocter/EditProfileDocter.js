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
import SearchableDropdown from 'react-native-searchable-dropdown';
import {getCategoryDataApiCall, doctorSignUpApiCall} from '../../Apis/Repo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {isNullOrEmpty} from '../../Constants/TextUtils';
import {URL} from '../../Constants/Constant';

const EditProfileDocter = props => {
  let [userData, setuserData] = useState('');
  let [imageName, setImageName] = useState('');
  const [image, setImage] = useState('');
  let [category, setCategory] = useState();
  let [selectedItems, setSelectedItems] = useState('');
  const [name, setName] = useState('');
  const [diseasesRelatedToPhysician, setDiseasesRelatedToPhysician] =
    useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [fee, setFee] = useState('');
  const [days, setDays] = useState('');
  console.log('selectedItems', selectedItems);

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setuserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
    });
  }, []);

  useEffect(() => {
    getCategoryData();
  }, []);

  const getCategoryData = () => {
    getCategoryDataApiCall()
      .then(res => {
        console.log('res', res);
        if (res.status == 200) {
          setCategory((category = res.data.result));
          console.log('category', category);
        } else console.warn('No data found');
      })
      .catch(err => {
        console.log('err', err);
      });
  };

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

  const onConfirm = () => {
    let formdata = new FormData();
    formdata.append('id', userData.id);
    formdata.append('user_id_fk', userData.user_id_fk);
    formdata.append('role', 2);
    formdata.append('name', name ? name : userData.name);
    formdata.append('email', userData.email);
    // formdata.append('number', userData.doctor.number);
    formdata.append('city', userData.city);
    formdata.append('address', userData.address);
    formdata.append(
      'diseases_related_to_physian',
      diseasesRelatedToPhysician
        ? diseasesRelatedToPhysician
        : userData.diseases_related_to_physian,
    );
    formdata.append(
      'work_experience',
      workExperience ? workExperience : userData.work_experience,
    );
    formdata.append(
      'category_id_fk',
      selectedItems.id ? selectedItems.id : userData.category_id_fk,
    );
    formdata.append('fee', fee ? fee : userData.fee);
    formdata.append('days', days ? days : userData.days);
    formdata.append('about', aboutMe ? aboutMe : userData.about);

    {
      !isNullOrEmpty(image)
        ? formdata.append('file_profile_image', {
            uri: image.path,
            name: imageName,
            type: image.mime,
          })
        : formdata.append(
            'file_profile_image',
            userData.doctor.file_profile_image,
          );
    }

    console.log('formdata', formdata);

    doctorSignUpApiCall(formdata)
      .then(data => {
        console.log('data', data);

        // if (data.data.status == 200 && data.data.success == true) {
        //   AsyncStorage.setItem('user_data', JSON.stringify(data.data.result));
        //   props.navigation.push('DocterLogin');
        // } else {
        //   alert(data.message);
        //   console.log('ADD');
        // }
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
              source={
                image
                  ? {uri: image.path}
                  : userData.doctor
                  ? userData.doctor.profile_image
                    ? {uri: URL.concat(userData.doctor.profile_image)}
                    : require('../../Assets/user-photo.png')
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
              placeholderTextColor={Theme.black}
              text={userData ? (userData.name ? userData.name : null) : null}
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
              placeholder={'Email'}
              text={userData ? (userData.email ? userData.email : null) : null}
              placeholderTextColor={Theme.black}
            />
            <TextInputs
              icon={
                <Ionicons
                  style={styles.iconStyle}
                  name={'cash-outline'}
                  size={22}
                  color={Theme.black}
                />
              }
              CustomView={styles.WrapViewEmail}
              CustomText={styles.InputText}
              placeholder={'Fee'}
              text={userData ? (userData.fee ? userData.fee : null) : null}
              placeholderTextColor={Theme.black}
              onChange={value => {
                setFee(value);
              }}
            />
            <TextInputs
              icon={
                <Entypo
                  style={styles.iconStyle}
                  name={'back-in-time'}
                  size={22}
                  color={Theme.black}
                />
              }
              CustomView={styles.WrapViewEmail}
              CustomText={styles.InputText}
              placeholder={'Days'}
              text={userData ? (userData.days ? userData.days : null) : null}
              placeholderTextColor={Theme.black}
              onChange={value => {
                setDays(value);
              }}
            />

            <SearchableDropdown
              multi={true}
              selectedItems={selectedItems}
              onItemSelect={item => {
                setSelectedItems(item);
              }}
              onTextChange={text => console.log(text)}
              containerStyle={{
                padding: 5,
                width: '100%',
                paddingHorizontal: 10,
                marginTop: 10,
                // height: 50,
                maxHeight: 220,
              }}
              // itemsContainerStyle={{
              //   maxHeight: 100,
              // }}
              textInputStyle={{
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                backgroundColor: '#FAF7F6',
              }}
              itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: '#FAF9F8',
                borderColor: '#bbb',
                borderWidth: 1,
              }}
              itemTextStyle={{
                color: '#222',
              }}
              items={category}
              // defaultIndex={2}
              placeholder={
                selectedItems ? selectedItems.name : 'search Specialization'
              }
              listProps={{nestedScrollEnabled: true}}
              resetValue={false}
            />

            {/* <TextInputs
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
            /> */}
            {/* <TextInput
              multiline={true}
              // numberOfLines={10}
              placeholder={'Diseases Related to Physician'}
              placeholderTextColor={Theme.black}
              style={styles.textArea}
              onChange={value => {
                setDiseasesRelatedToPhysician(value);
                console.log(value);
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
              placeholder={'Diseases Related to Physician'}
              text={
                userData
                  ? userData.diseases_related_to_physian
                    ? userData.diseases_related_to_physian
                    : null
                  : null
              }
              placeholderTextColor={Theme.black}
              onChange={value => {
                setDiseasesRelatedToPhysician(value);
                console.log(value);
              }}
            />
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
              placeholder={'Work Experience'}
              text={
                userData
                  ? userData.work_experience
                    ? userData.work_experience
                    : null
                  : null
              }
              placeholderTextColor={Theme.black}
              onChange={value => {
                setWorkExperience(value);
                console.log(value);
              }}
            />
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
              placeholder={'About Me'}
              text={userData ? (userData.about ? userData.about : null) : null}
              placeholderTextColor={Theme.black}
              onChange={value => {
                setAboutMe(value);
                console.log(value);
              }}
            />
          </View>
          <Button
            CustomButton={styles.CustomButton}
            CustomText={styles.CustomText}
            label={'Confirm'}
            onPress={() => {
              onConfirm();
              // props.navigation.push('DocterLogin')
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default EditProfileDocter;
