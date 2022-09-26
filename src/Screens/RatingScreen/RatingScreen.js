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
import {PatientBookAppointmentApiCall} from '../../Apis/Repo';
import Theme from '../../Constants/Theme';
import Fonts from '../../Constants/Fonts';

const RatingScreen = props => {
  console.log('props', props);
  let [data, setData] = useState(props.route.params.data);
  let [rating, setRating] = useState(5);
  console.log('rating', rating);
  console.log('data', data);

  const onConfirm = () => {
    let obj = {
      id: data.id,
      patient_id_fk: data.patient_id_fk,
      doctor_id_fk: data.doctor_id_fk,
      category_id_fk: data.category_id_fk,
      fee: data.fee,
      rate: parseFloat(rating),
      start_datetime: data.start_datetime,
      end_datetime: data.end_datetime,
      status: data.status,
      patient_history: data.patient_history,
      medical_record: data.medical_record,
      patient: null,
    };
    console.log('obj', obj);
    // props.navigation.push('PaymentScreen');

    PatientBookAppointmentApiCall(obj)
      .then(data => {
        console.log('data', data);

        if (data.data.status == 200 && data.data.success == true) {
          props.navigation.replace('PatientDashboard');
        } else {
          alert(data.message);
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  return (
    <View style={styles.Container}>
      <View style={styles.headerWrapper}>
        {/* <DrawerButton
          MenuStyle={styles.MenuStyle}
          onPress={() => props.navigation.openDrawer()}
        /> */}
        <View style={styles.notifyWrap}>
          {/* <Image
            style={styles.ProfileImage}
            source={require('../../Assets/user_photo.png')}
          /> */}
          <Text
            style={{
              color: Theme.white,
              fontSize: Theme.scale(20),
              fontFamily: Fonts.HELODOX_BOLD_FONT,
            }}>
            Comment Here
          </Text>
        </View>
      </View>
      <View style={styles.InnerContainer}>
        <View style={styles.startView}>
          <Stars
            default={rating}
            count={5}
            half={false}
            update={value => {
              setRating((rating = value + '.0'));
            }}
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
          color="black"
        />

        <TouchableOpacity
          onPress={() => {
            onConfirm();
          }}
          style={{
            backgroundColor: '#7BBCF0',
            height: 50,
            width: 100,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 50,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              marginVertical: 14,
              color: 'white',
              fontWeight: '700',
            }}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RatingScreen;
