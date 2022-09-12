import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './Styles';
import Notify from '../../Assets/notification';
import DrawerButton from '../../Components/DrawerButton';
import CustomText from '../../Components/customText';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../Components/Button';

const BookAppointmentScreen = props => {
  return (
    <View style={styles.Container}>
      <View style={styles.headerView}>
        <View style={styles.headerWrapper}>
          <View style={styles.notifyWrap}>
            <Notify width={30} height={30} style={styles.Notify} />
            <Image
              style={styles.ProfileImage}
              source={require('../../Assets/user_photo.png')}
            />
          </View>
        </View>
        <View style={styles.docView}>
          <Image
            style={styles.DocImage}
            source={require('../../Assets/Doc2.png')}
          />
          <View style={styles.docTextView}>
            <CustomText
              SimpleText={true}
              customStyle={styles.docText}
              label={'DR. HAMZA ARSHAD'}
            />
            <CustomText
              SimpleText={true}
              customStyle={styles.PhyText}
              label={'Emergency Physician'}
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
            {/* <View>
              <Feather
                name="users"
                size={30}
                color={'black'}
                style={{alignSelf: 'center'}}
              />
              <CustomText
                SimpleText={true}
                customStyle={styles.perText}
                label={'96%'}
              />
              <CustomText
                SimpleText={true}
                customStyle={styles.scoreText}
                label={'Client/Staff Score'}
              />
            </View> */}
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
              label={'Rs/1000'}
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
              label={'Mon,Tue,Wed,Thu,Fri'}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookAppointmentScreen;
