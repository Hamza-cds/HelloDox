import React from 'react';
import {Text} from 'react-native';

const CustomText = props => {
  const {label, SimpleText} = props;
  return (
    <>
      {SimpleText === true ? (
        <Text style={{...props.customStyle}}>{label}</Text>
      ) : null}
    </>
  );
};
export default CustomText;
