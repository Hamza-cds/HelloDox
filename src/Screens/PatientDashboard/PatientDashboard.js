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
import DrawerButton from '../../Components/DrawerButton';
import CustomText from '../../Components/customText';
import Feather from 'react-native-vector-icons/Feather';
import Theme from '../../Constants/Theme';
import Dental from '../../Assets/dental_Icon';
import Hearct from '../../Assets/heart_Icon';
import Brain from '../../Assets/brain_Icon';

const PatientDashboard = props => {
  const [data, setData] = useState([
    {
      id: 1,
      Icon: <Dental width={30} height={30} />,
      category: 'Dental',
      total: '10 Docter',
    },
    {
      id: 2,
      Icon: <Hearct width={30} height={30} />,
      category: 'Heart',
      total: '26 Docter',
    },
    {
      id: 3,
      Icon: <Brain width={30} height={30} />,
      category: 'Brain',
      total: '15 Docter',
    },
    {
      id: 4,
      Icon: <Dental width={30} height={30} />,
      category: 'Dental',
      total: '10 Docter',
    },
    {
      id: 5,
      Icon: <Hearct width={30} height={30} />,
      category: 'Heart',
      total: '26 Docter',
    },
    {
      id: 6,
      Icon: <Brain width={30} height={30} />,
      category: 'Brain',
      total: '15 Docter',
    },
  ]);
  const [info, setInfo] = useState([
    {
      id: 1,
      Image: require('../../Assets/Doc2.png'),
      DocName: 'Dr. Hamza',
      Specialization: 'Bone Specialist',
      star: require('../../Assets/Star.png'),
      rating: '2.4',
    },
    {
      id: 2,
      Image: require('../../Assets/Doc2.png'),
      DocName: 'Dr. Frasat',
      Specialization: 'Heart Specialist',
      star: require('../../Assets/Star.png'),
      rating: '2.9',
    },
    {
      id: 3,
      Image: require('../../Assets/Doc2.png'),
      DocName: 'Dr. Sarmad',
      Specialization: 'Emergency Physician',
      star: require('../../Assets/Star.png'),
      rating: '3.4',
    },
    {
      id: 4,
      Image: require('../../Assets/Doc2.png'),
      DocName: 'Dr. Daniyal',
      Specialization: 'Eyes Specialist',
      star: require('../../Assets/Star.png'),
      rating: '2.2',
    },
    {
      id: 5,
      Image: require('../../Assets/Doc2.png'),
      DocName: 'Dr. Ahmed',
      Specialization: 'Dentist Specialist',
      star: require('../../Assets/Star.png'),
      rating: '4.4',
    },
    {
      id: 6,
      Image: require('../../Assets/Doc2.png'),
      DocName: 'Dr. Qaiser',
      Specialization: 'Skin Specialist',
      star: require('../../Assets/Star.png'),
      rating: '3.7',
    },
  ]);

  return (
    <View style={styles.Container}>
      <View style={styles.headerWrapper}>
        <DrawerButton MenuStyle={styles.MenuStyle} />
        <View style={styles.notifyWrap}>
          <Notify width={35} height={35} style={styles.Notify} />
          <Image
            style={styles.ProfileImage}
            source={require('../../Assets/user_photo.png')}
          />
        </View>
      </View>
      <View style={styles.InnerContainer}>
        <View style={styles.TextWrapper}>
          <CustomText
            SimpleText={true}
            customStyle={styles.hiText}
            label={'Hi, John'}
          />
          <CustomText
            SimpleText={true}
            customStyle={styles.WelText}
            label={'Welcome'}
          />
        </View>
        <View style={styles.InputBoxWrapper}>
          <TextInput
            placeholder="Search...."
            placeholderTextColor={'#ABABAB'}
            style={styles.textInputStyle}
          />
          <TouchableOpacity>
            <View style={styles.searchWrapper}>
              <Feather
                style={styles.iconStyle}
                name={'search'}
                size={30}
                color={Theme.white}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.catWprapper}>
            <CustomText
              SimpleText={true}
              customStyle={styles.CatText}
              label={'Category'}
            />
            <CustomText
              SimpleText={true}
              customStyle={styles.SeeText}
              label={'See all'}
            />
          </View>
          <View style={{marginLeft: 25, marginRight: 15}}>
            <FlatList
              horizontal={true}
              data={data}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity>
                  <View style={styles.FlatView}>
                    {item.Icon}
                    <Text style={styles.docText}>{item.category}</Text>
                    <Text style={styles.totalText}>{item.total}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.catWprapper}>
            <CustomText
              SimpleText={true}
              customStyle={styles.CatText}
              label={'Top rate'}
            />
            <CustomText
              SimpleText={true}
              customStyle={styles.SeeText}
              label={'See all'}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            flex: 1,
          }}>
          <FlatList
            data={info}
            style={{}}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.docWrapper}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={item.Image} style={styles.imageStyle} />
                  <View style={styles.wrapText}>
                    <Text style={styles.DocNameText}>{item.DocName}</Text>
                    <Text style={styles.specialText}>
                      {item.Specialization}
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image source={item.star} style={styles.imageStyle} />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default PatientDashboard;
