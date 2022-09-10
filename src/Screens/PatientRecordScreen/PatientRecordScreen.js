import React, {useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './Styles';
import TextInputs from '../../Components/TextInputs';
import Notify from '../../Assets/notification';
import DrawerButton from '../../Components/DrawerButton';
import CustomText from '../../Components/customText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Theme from '../../Constants/Theme';
import CheckBox from 'react-native-check-box';
import Button from '../../Components/Button';

const PatientRecordScreen = props => {
  const [selectedItem, setSelectedItem] = useState({
    id: 1,
    Image: require('../../Assets/user_photo.png'),
    Name: 'Hamza Rajput',
    Icon: <MaterialIcons name="done-all" size={25} color="black" />,
  });
  const [info, setInfo] = useState([
    {
      id: 1,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Hamza Rajput',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
    {
      id: 2,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Qaiser Malik',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
    {
      id: 3,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Ashar Arain',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
    {
      id: 4,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Farasat Mughal',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
    {
      id: 5,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Sarmad Raza',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
    {
      id: 6,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Sarmad Raza',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
    {
      id: 7,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Sarmad Raza',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
    {
      id: 8,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Sarmad Raza',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
    {
      id: 9,
      Image: require('../../Assets/user_photo.png'),
      Name: 'Sarmad Raza',
      Icon: <MaterialIcons name="done-all" size={25} color="black" />,
    },
  ]);
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
        <CustomText
          SimpleText={true}
          customStyle={styles.addText}
          label={'Patients Records'}
        />
        <TextInputs
          icon={
            <Feather
              style={styles.iconStyle}
              name={'search'}
              size={25}
              color={Theme.black}
            />
          }
          CustomView={styles.WrapViewSearch}
          CustomText={styles.InputText}
          placeholder={'Search...'}
          placeholderTextColor={Theme.black}
        />
        <View
          style={{
            flex: 1,
          }}>
          <FlatList
            data={info}
            showsVerticalScrollIndicator={false}
            style={{marginBottom: '23%'}}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.flatView}
                onPress={() => setSelectedItem(item)}>
                <View style={styles.imageWrap}>
                  <Image source={item.Image} />
                  <Text style={styles.nameText}>{item.Name}</Text>
                </View>
                {selectedItem.id == item.id ? (
                  <View style={{alignSelf: 'center'}}>{item.Icon}</View>
                ) : null}
              </TouchableOpacity>
            )}
          />
        </View>
        <Button
          CustomButton={styles.CustomButton}
          CustomText={styles.CustomText}
          label={'Access'}
          onPress={() => props.navigation.push('PatientDetailScreen')}
        />
      </View>
    </View>
  );
};

export default PatientRecordScreen;
