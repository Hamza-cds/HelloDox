import React, {useEffect} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import styles from './Styles';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeScreen');
    }, 3000);
  }, []);
  // git;
  return (
    <ImageBackground
      style={styles.SplashStyles}
      source={require('../../Assets/Commen.png')}>
      <View style={styles.textWrapper}>
        <Text style={styles.helText}>Hello</Text>
        <Text style={styles.docText}>Dox</Text>
      </View>
      <Image
        style={styles.ProfileImage}
        source={require('../../Assets/SplashStyle.png')}
      />
    </ImageBackground>
  );
};

export default SplashScreen;
