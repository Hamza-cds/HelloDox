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
import SelectDropdown from 'react-native-select-dropdown';

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
    formdata.append('id', userData.doctor.id);
    formdata.append('user_id_fk', userData.doctor.user_id_fk);
    formdata.append('role', 2);
    formdata.append('name', name ? name : userData.doctor.name);
    formdata.append('email', userData.email);
    // formdata.append('number', userData.doctor.number);
    formdata.append('city', userData.doctor.city);
    formdata.append('address', userData.doctor.address);
    formdata.append(
      'diseases_related_to_physian',
      diseasesRelatedToPhysician
        ? diseasesRelatedToPhysician
        : userData.doctor.diseases_related_to_physian,
    );
    formdata.append(
      'work_experience',
      workExperience ? workExperience : userData.doctor.work_experience,
    );
    formdata.append(
      'category_id_fk',
      selectedItems.id ? selectedItems.id : userData.doctor.category_id_fk,
    );
    formdata.append('fee', fee ? fee : userData.doctor.fee);
    formdata.append('days', days ? days : userData.doctor.days);
    formdata.append('about', aboutMe ? aboutMe : userData.doctor.about);

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
        props.navigation.replace('DocterLogin', {
          category: category,
        });
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
        <Text
          style={{
            fontSize: 22,
            fontFamily: Fonts.HELODOX_BOLD_FONT,
            alignSelf: 'center',
            marginTop: 5,
          }}>
          Edit Profile
        </Text>
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
              color="black"
              text={
                userData
                  ? userData.doctor
                    ? userData.doctor.name
                      ? userData.doctor.name
                      : null
                    : null
                  : null
              }
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
              editable={false}
              text={userData ? (userData.email ? userData.email : null) : null}
              placeholderTextColor={Theme.black}
              color="black"
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
              text={
                userData
                  ? userData.doctor
                    ? userData.doctor.fee
                      ? userData.doctor.fee
                      : null
                    : null
                  : null
              }
              placeholderTextColor={Theme.black}
              color="black"
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
              text={
                userData
                  ? userData.doctor
                    ? userData.doctor.days
                      ? userData.doctor.days
                      : null
                    : null
                  : null
              }
              placeholderTextColor={Theme.black}
              color="black"
              onChange={value => {
                setDays(value);
              }}
            />

            <SelectDropdown
              data={category}
              defaultButtonText={'select category'}
              onSelect={(item, index) => {
                setSelectedItems((selectedItems = item));
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.name;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item.name;
              }}
              buttonStyle={{
                alignSelf: 'center',
                marginVertical: 20,
                width: '95%',
                borderWidth: 0.5,
              }}
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
                  ? userData.doctor
                    ? userData.doctor.diseases_related_to_physian
                      ? userData.doctor.diseases_related_to_physian
                      : null
                    : null
                  : null
              }
              placeholderTextColor={Theme.black}
              color="black"
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
              color="black"
              placeholder={'Work Experience'}
              text={
                userData
                  ? userData.doctor
                    ? userData.doctor.work_experience
                      ? userData.doctor.work_experience
                      : null
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
              color="black"
              placeholder={'About Me'}
              text={
                userData
                  ? userData.doctor
                    ? userData.doctor.about
                      ? userData.doctor.about
                      : null
                    : null
                  : null
              }
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
