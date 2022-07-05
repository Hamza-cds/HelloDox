import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Styles';
import TextInputs from '../../Components/TextInputs';
import Feather from 'react-native-vector-icons/Feather';
import Theme from '../../Constants/Theme';
import Button from '../../Components/Button';
import CodeComponent from '../../Components/CodeComponent';
import CustomText from '../../Components/customText';

const VarifyScreen = props => {
  return (
    <View style={styles.Container}>
      <View style={styles.InnerContainer}>
        <CustomText
          SimpleText={true}
          customStyle={styles.VerifyText}
          label={'Enter the varification code'}
        />
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: '20%'}}>
          <CodeComponent
            CustomView={styles.wrapView}
            CustomInput1={styles.textInput}
            placeholder={'5'}
            placeholderTextColor={'black'}
            maxLength={1}
          />
          <CodeComponent
            CustomView={styles.wrapView}
            CustomInput1={styles.textInput}
            placeholder={'4'}
            placeholderTextColor={'black'}
            maxLength={1}
          />
          <CodeComponent
            CustomView={styles.wrapView}
            CustomInput1={styles.textInput}
            placeholder={'5'}
            placeholderTextColor={'black'}
            maxLength={1}
          />
          <CodeComponent
            CustomView={styles.wrapView}
            CustomInput1={styles.textInput}
            placeholder={'7'}
            placeholderTextColor={'black'}
            maxLength={1}
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
          onPress={() => props.navigation.replace('PatientDashboard')}
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
