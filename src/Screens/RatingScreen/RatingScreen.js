import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import styles from './Styles';
import TextInputs from '../../Components/TextInputs';
import Notify from '../../Assets/notification';
import Stars from 'react-native-stars';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RatingScreen = props => {
  return (
    <View style={styles.Container}>
      <View style={styles.headerWrapper}>
        {/* <DrawerButton
          MenuStyle={styles.MenuStyle}
          onPress={() => props.navigation.openDrawer()}
        /> */}
        <View style={styles.notifyWrap}>
          <Notify width={30} height={30} style={styles.Notify} />
          <Image
            style={styles.ProfileImage}
            source={require('../../Assets/user_photo.png')}
          />
        </View>
      </View>
      <View style={styles.InnerContainer}>
        <View style={styles.startView}>
          <Stars
            default={3}
            count={5}
            half={false}
            // starSize={50}
            fullStar={
              <Foundation name={'star'} size={40} style={styles.myStarStyle} />
            }
            emptyStar={
              <Ionicons
                size={35}
                name={'star-outline'}
                style={[styles.myStarStyle, styles.myEmptyStarStyle]}
              />
            }
            halfStar={
              <Ionicons
                name={'star-half-sharp'}
                size={40}
                style={[styles.myStarStyle]}
              />
            }
          />
        </View>
        <TextInputs
          CustomView={styles.WrapViewNumber}
          CustomText={styles.InputText}
          placeholder={'Write Comment Here'}
          placeholderTextColor={'#989797'}
        />
      </View>
    </View>
  );
};

export default RatingScreen;
