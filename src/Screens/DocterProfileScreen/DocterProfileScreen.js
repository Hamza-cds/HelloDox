import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './Styles';
import Notify from '../../Assets/notification';
import DrawerButton from '../../Components/DrawerButton';
import CustomText from '../../Components/customText';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../Components/Button';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DocterProfileScreen = props => {
  return (
    <View style={styles.Container}>
      <View style={styles.headerView}>
        <View style={styles.headerWrapper}>
          {/* <DrawerButton
            MenuStyle={styles.MenuStyle}
            onPress={() => props.navigation.openDrawer()}
          /> */}
          <View style={styles.notifyWrap}>
            <Notify width={30} height={30} style={styles.Notify} />
            <Image
              style={styles.ProfileImage}
              source={require('../../Assets/Doc_photo.png')}
            />
          </View>
        </View>
        <View style={styles.docView}>
          <Image
            style={styles.DocImage}
            source={require('../../Assets/Doc_photo2.png')}
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
        <TouchableOpacity
          onPress={() => props.navigation.push('EditProfileDocter')}>
          <FontAwesome5
            name="pen"
            size={22}
            color={'white'}
            style={{alignSelf: 'flex-end', paddingRight: 25, paddingBottom: 10}}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.diseasWrap}>
          <View style={styles.iconWrap}>
            <View>
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
            </View>
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

export default DocterProfileScreen;
