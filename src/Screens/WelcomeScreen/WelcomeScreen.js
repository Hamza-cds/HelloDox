import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomText from '../../Components/customText';
import styles from './Styles';
import Gmail from '../../Assets/gmail';
import Facebook from '../../Assets/facebook';
import Twitter from '../../Assets/twitter';
import Category from '../../Assets/Docter';
import Patient from '../../Assets/Patient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getCategoryDataApiCall} from '../../APIs/Repo';

const WelcomeScreen = props => {
  let [category, setCategory] = useState();

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

  return (
    <ImageBackground
      style={styles.Container}
      source={require('../../Assets/Commen.png')}>
      {/* <LogoText CustomView={styles.textWrapper} /> */}
      <CustomText
        SimpleText={true}
        customStyle={styles.headText}
        label={'Join As'}
      />

      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            props.navigation.push('DocterLogin', {
              category: category,
            })
          }>
          <View style={styles.docButton}>
            <Category width={100} height={100} />
            <CustomText
              SimpleText={true}
              customStyle={styles.docText}
              label={'I am Docter'}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => props.navigation.push('PatientLogin')}>
          <View style={styles.patButton}>
            <Patient width={100} height={100} />
            <CustomText
              SimpleText={true}
              customStyle={styles.docText}
              label={'I am Patient'}
            />
          </View>
        </TouchableOpacity>

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
    </ImageBackground>
  );
};

export default WelcomeScreen;
