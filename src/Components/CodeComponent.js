import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

const CodeComponent = props => {
  const {label, placeholder, icon, onpres, placeholderTextColor, maxLength} =
    props;
  return (
    <View style={{...props.CustomView}}>
      <TextInput
        style={{...props.CustomInput1}}
        maxLength={maxLength}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        keyboardType={'numeric'}></TextInput>
      {/* <TextInput
        style={{...props.CustomInput1}}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        keyboardType={'numeric'}></TextInput>
      <TextInput
        style={{...props.CustomInput1}}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        keyboardType={'numeric'}></TextInput>
      <TextInput
        style={{...props.CustomInput1}}
        placeholderTextColor={placeholderTextColor}
        tvParallaxMagnification={true}
        placeholder={placeholder}
        keyboardType={'numeric'}></TextInput> */}
    </View>
  );
};

export default CodeComponent;
