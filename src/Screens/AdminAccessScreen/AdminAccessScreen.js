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
import TextInputs from '../../Components/TextInputs';
import Notify from '../../Assets/notification';
import DrawerButton from '../../Components/DrawerButton';
import CustomText from '../../Components/customText';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Theme from '../../Constants/Theme';
import Button from '../../Components/Button';

const AdminAccessScreen = props => {
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
            style={styles.ProfileImage}
            source={require('../../Assets/user_photo.png')}
          />
        </View>
      </View>
      <View style={styles.InnerContainer}>
        <CustomText
          SimpleText={true}
          customStyle={styles.addText}
          label={'Admin Access'}
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
        </View>
        <Button
          CustomButton={styles.CustomButton}
          CustomText={styles.CustomText}
          label={'Access'}
          onPress={() => props.navigation.push('PatientRecordScreen')}
        />
      </View>
    </View>
  );
};

export default AdminAccessScreen;
