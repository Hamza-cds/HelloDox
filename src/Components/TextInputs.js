import React from 'react';
import {View, Text, TextInput} from 'react-native';
const TextInputs = props => {
  const {
    label,
    placeholder,
    icon,
    secureTextEntry,
    iconOutline,
    placeholderTextColor,
    maxLength,
    onChange,
    keyboardType,
  } = props;
  return (
    <View style={{...props.CustomView}}>
      {icon}

      <TextInput
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        style={{...props.CustomText}}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        onChangeText={onChange}
        keyboardType={keyboardType}
      />
      {iconOutline}
    </View>
  );
};

export default TextInputs;
