import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './Styles';
import Notify from '../../Assets/notification';
import DrawerButton from '../../Components/DrawerButton';
import CustomText from '../../Components/customText';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../Components/Button';
import {getDoctorDataByIDApiCall} from '../../Apis/Repo';
import {URL} from '../../Constants/Constant';

const BookAppointmentScreen = props => {
  console.log('props', props);
  let ID = props.route.params.id;

  let [docData, setDocData] = useState('');

  useEffect(() => {
    getCategoryData();
  }, []);

  const getCategoryData = () => {
    getDoctorDataByIDApiCall(ID)
      .then(res => {
        console.log('res', res);
        if (res.status == 200) {
          setDocData((docData = res.data.result));
          console.log('docData kajsf', docData);
        } else console.warn('No data found');
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  return (
    <View style={styles.Container}>
      <View style={styles.headerView}>
        {/* <View style={styles.headerWrapper}>
          <View style={styles.notifyWrap}>
            <Notify width={30} height={30} style={styles.Notify} />
            <Image
              style={styles.ProfileImage}
              source={require('../../Assets/user_photo.png')}
            />
          </View>
        </View> */}
        <View style={{marginVertical: 25}} />
        <View style={styles.docView}>
          <Image
            style={styles.DocImage}
            source={
              docData
                ? docData.profile_image
                  ? {uri: URL.concat(docData.profile_image)}
                  : require('../../Assets/EmptyProfile.png')
                : require('../../Assets/EmptyProfile.png')
            }
          />
          <View style={styles.docTextView}>
            <CustomText
              SimpleText={true}
              customStyle={styles.docText}
              label={docData.name ? docData.name : null}
            />
            <CustomText
              SimpleText={true}
              customStyle={styles.PhyText}
              label={
                docData
                  ? docData.category
                    ? docData.category.name
                      ? docData.category.name
                      : null
                    : null
                  : null
              }
            />
            <Image
              style={styles.startImage}
              source={require('../../Assets/star_icons.png')}
            />
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.diseasWrap}>
          <View style={styles.iconWrap}>
            <View>
              <AntDesign
                name="like2"
                size={30}
                color={'black'}
                style={{alignSelf: 'center'}}
              />
              <CustomText
                SimpleText={true}
                customStyle={styles.perText}
                label={'100%'}
              />
              <CustomText
                SimpleText={true}
                customStyle={styles.scoreText}
                label={'Patient Satisfaction'}
              />
            </View>
            <View>
              <AntDesign
                name="filetext1"
                size={30}
                color={'black'}
                style={{alignSelf: 'center'}}
              />
              <CustomText
                SimpleText={true}
                customStyle={styles.perText}
                label={'8 Years'}
              />
              <CustomText
                SimpleText={true}
                customStyle={styles.scoreText}
                label={'Experience'}
              />
            </View>
          </View>
          <View style={styles.divider}></View>
          <View style={{marginVertical: 10}}>
            <CustomText
              SimpleText={true}
              customStyle={styles.simpleText}
              label={'Diseases related to Physician:'}
            />
            <View style={styles.bulletWrap}>
              <MaterialIcons
                name="arrow-right"
                size={30}
                color={'black'}
                style={{alignSelf: 'center'}}
              />
              <CustomText
                SimpleText={true}
                customStyle={styles.boneText}
                label={'Bone Fracture'}
              />
            </View>
            <View style={styles.bulletWrap}>
              <MaterialIcons
                name="arrow-right"
                size={30}
                color={'black'}
                style={{alignSelf: 'center'}}
              />
              <CustomText
                SimpleText={true}
                customStyle={styles.boneText}
                label={'Dics Degeneration'}
              />
            </View>
            <View style={styles.bulletWrap}>
              <MaterialIcons
                name="arrow-right"
                size={30}
                color={'black'}
                style={{alignSelf: 'center'}}
              />
              <CustomText
                SimpleText={true}
                customStyle={styles.boneText}
                label={'Planter Fasciitis'}
              />
            </View>
          </View>
        </View>
        <View style={styles.appWrap}>
          <CustomText
            SimpleText={true}
            customStyle={styles.heloText}
            label={'HeloDox:'}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomText
              SimpleText={true}
              customStyle={styles.feeText}
              label={'Fee:'}
            />
            <CustomText
              SimpleText={true}
              customStyle={styles.amoutText}
              label={docData.fee ? docData.fee : null}
            />
          </View>
          <View style={styles.divider}></View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomText
              SimpleText={true}
              customStyle={styles.feeText}
              label={'Days:'}
            />
            <CustomText
              SimpleText={true}
              customStyle={styles.amoutText}
              label={docData.days ? docData.days : null}
            />
          </View>
          <View style={styles.divider}></View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomText
              SimpleText={true}
              customStyle={styles.feeText}
              label={'Time:'}
            />
            <CustomText
              SimpleText={true}
              customStyle={styles.amoutText}
              label={'09:00 AM - 09:20 PM'}
            />
          </View>
          <View style={styles.divider}></View>
          <Button
            CustomButton={styles.CustomButton}
            CustomText={styles.CustomText}
            label={'Book Appoitment'}
            onPress={() => props.navigation.push('AppointmentDateScreen')}
          />
        </View>
        <View style={styles.workWrap}>
          <CustomText
            SimpleText={true}
            customStyle={styles.wrokText}
            label={'Work Experience:'}
          />
          <CustomText
            SimpleText={true}
            customStyle={styles.orthoText}
            label={'MBBS,FCPS (Orthopedic Surgery)'}
          />
          <CustomText
            SimpleText={true}
            customStyle={styles.proText}
            label={'Assistant Professor'}
          />
        </View>
        <View style={styles.aboutWrap}>
          <CustomText
            SimpleText={true}
            customStyle={styles.abourText}
            label={'About Me:'}
          />
          <Text style={styles.loremText}>
            {docData.about ? docData.about : null}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookAppointmentScreen;
