import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Theme from '../Constants/Theme';
import Fonts from '../Constants/Fonts';

const LogoText = props => {
  const {label, SimpleText} = props;
  return (
    <View style={{...props.CustomView}}>
      <Text style={styles.helText}>Hello</Text>
      <Text style={styles.docText}>Dox</Text>
    </View>
  );
};

export default LogoText;
const styles = StyleSheet.create({
  helText: {
    color: Theme.secondry,
    fontSize: Theme.scale(40),
    fontFamily: Fonts.HELODOX_BOLD_FONT,
  },
  docText: {
    color: Theme.textColor,
    marginLeft: 2,
    fontSize: Theme.scale(40),
    fontFamily: Fonts.HELODOX_BOLD_FONT,
  },
});
