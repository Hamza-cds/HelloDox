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
    editable,
    text,
  } = props;
  return (
    <View style={{...props.CustomView}}>
      {icon}

      <TextInput
        editable={editable}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        style={{...props.CustomText}}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        onChangeText={onChange}
        keyboardType={keyboardType}>
        <Text>{text}</Text>
      </TextInput>
      {iconOutline}
    </View>
  );
};

export default TextInputs;
