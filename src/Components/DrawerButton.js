import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Menu from '../Assets/menu';

const DrawerButton = props => {
  const {
    label,
    placeholder,
    label2,
    icon,
    onPress,
    color,
    onpress,
    home,
    homeSecond,
  } = props;
  return (
    <>
      <TouchableOpacity style={{...props.CustomStyle}} onPress={onPress}>
        <Menu width={25} height={25} style={{...props.MenuStyle}} />
      </TouchableOpacity>
    </>
  );
};

export default DrawerButton;
const styles = StyleSheet.create({});
