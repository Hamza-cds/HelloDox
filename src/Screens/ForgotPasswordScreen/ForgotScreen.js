import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Styles';
import TextInputs from '../../Components/TextInputs';
import Feather from 'react-native-vector-icons/Feather';
import Theme from '../../Constants/Theme';
import Button from '../../Components/Button';
import CustomText from '../../Components/customText';

const ForgotScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.InnerContainer}>
        <CustomText
          SimpleText={true}
          customStyle={styles.VerifyText}
          label={'Please enter your phone\nNumber to varify'}
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
          CustomView={styles.WrapViewPass}
          CustomText={styles.InputText}
          placeholder={'Number'}
          placeholderTextColor={Theme.black}
          keyboardType={'numeric'}
        />
        <Button
          CustomButton={styles.CustomButton}
          CustomText={styles.CustomText}
          label={'Varify'}
          onPress={() => navigation.replace('VarifyScreen')}
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
