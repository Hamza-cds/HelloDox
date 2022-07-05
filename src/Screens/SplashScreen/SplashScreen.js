import React, {useEffect} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './Styles';
import {useState} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeScreen');
    }, 3000);
  }, []);
  return (
    <ImageBackground
      style={styles.SplashStyles}
      source={require('../../Assets/Splash.png')}>
      {/* <AntDesign name="camerao" size={30} color="black" /> */}
      <View style={styles.textWrapper}>
        <Text style={styles.helText}>Hello</Text>
        <Text style={styles.docText}>Dox</Text>
      </View>
      <Image
        style={styles.ProfileImage}
        source={require('../../Assets/DocImage1.png')}
      />
    </ImageBackground>
  );
};

export default SplashScreen;
