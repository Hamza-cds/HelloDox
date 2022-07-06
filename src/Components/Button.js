import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Button = props => {
  const {label, placeholder, icon, onPress} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{...props.CustomButton}}
      onPress={onPress}>
      <Text style={{...props.CustomText}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
