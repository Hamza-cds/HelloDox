import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar, LogBox} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../Screens/SplashScreen/SplashScreen';
import WelcomeScreen from '../../Screens/WelcomeScreen/WelcomeScreen';
import PatientDashboard from '../../Screens/PatientDashboard/PatientDashboard';
import DocterLogin from '../../Screens/DocterLogin/DocterLogin';
import PatientLogin from '../../Screens/PatientLogin/PatientLogin';
import ForgotScreen from '../../Screens/ForgotPasswordScreen/ForgotScreen';
import VarifyScreen from '../../Screens/VarificationScreen/VarifyScreen';
import Theme from '../../Constants/Theme';
import Fonts from '../../Constants/Fonts';
import DocterDashboard from '../../Screens/DocterDashboard/DocterDashboard';
import DocterProfileScreen from '../../Screens/DocterProfileScreen/DocterProfileScreen';
import EditProfileScreen from '../../Screens/DocterEditProfileScreen/EditProfileScreen';
import BookAppointmentScreen from '../../Screens/BookAppointmentScreen/BookAppointmentScreen';
import AppointmentDateScreen from '../../Screens/AppointmentDateScreen/AppointmentDateScreen';
import AppointmentConfirmScreen from '../../Screens/AppointmentConfirmScreen/AppointmentConfirmScreen';
import AppointmentsScreen from '../../Screens/AppointmentsScreen/AppointmentsScreen';
import DrawerNavPatient from '../DrawerNavigation/DrawerNavPatient';
import DrawerNavDocter from '../DrawerNavigation/DrawerNavDocter';
import EditProfileDocter from '../../Screens/EditProfileDocter/EditProfileDocter';
import PatientRecordScreen from '../../Screens/PatientRecordScreen/PatientRecordScreen';
import PatientDetailScreen from '../../Screens/PatientDetailScreen/PatientDetailScreen';
import PaymentScreen from '../../Screens/PaymentScreen/PaymentScreen';
import RatingScreen from '../../Screens/RatingScreen/RatingScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        {Platform.OS === 'ios' ? (
          <StatusBar barStyle="light-content" />
        ) : (
          <StatusBar
            barStyle="light-content"
            backgroundColor={'white'}
            hidden={true}
          />
        )}
      </View>

      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="DocterLogin" component={DocterLogin} />
        <Stack.Screen name="PatientLogin" component={PatientLogin} />
        <Stack.Screen
          name="ForgotScreen"
          component={ForgotScreen}
          options={{
            headerShown: true,
            title: 'Forgot Password',
            headerTransparent: 'true',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: Theme.scale(22),
              marginLeft: 100,
              fontFamily: Fonts.HELODOX_MEDIUM_FONT,
            },
          }}
        />
        <Stack.Screen
          name="VarifyScreen"
          component={VarifyScreen}
          options={{
            headerShown: true,
            title: 'Varification Code',
            headerTransparent: 'true',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: Theme.scale(22),
              marginLeft: 20,
              fontFamily: Fonts.HELODOX_MEDIUM_FONT,
            },
          }}
        />
        <Stack.Screen name="PatientDashboard" component={DrawerNavPatient} />
        <Stack.Screen name="DocterDashboard" component={DrawerNavDocter} />
        <Stack.Screen
          name="DocterProfileScreen"
          component={DocterProfileScreen}
          options={{
            headerShown: true,
            title: '',
            headerTransparent: 'true',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: Theme.scale(22),
              marginLeft: 20,
              fontFamily: Fonts.HELODOX_MEDIUM_FONT,
            },
          }}
        />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen
          name="BookAppointmentScreen"
          component={BookAppointmentScreen}
          options={{
            headerShown: true,
            title: '',
            headerTransparent: 'true',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: Theme.scale(22),
              marginLeft: 20,
              fontFamily: Fonts.HELODOX_MEDIUM_FONT,
            },
          }}
        />
        <Stack.Screen
          name="AppointmentDateScreen"
          component={AppointmentDateScreen}
          options={{
            headerShown: true,
            title: '',
            headerTransparent: 'true',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: Theme.scale(22),
              marginLeft: 20,
              fontFamily: Fonts.HELODOX_MEDIUM_FONT,
            },
          }}
        />
        <Stack.Screen
          name="AppointmentConfirmScreen"
          component={AppointmentConfirmScreen}
          options={{
            headerShown: true,
            title: '',
            headerTransparent: 'true',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: Theme.scale(22),
              marginLeft: 20,
              fontFamily: Fonts.HELODOX_MEDIUM_FONT,
            },
          }}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{
            headerShown: true,
            title: '',
            headerTransparent: 'true',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: Theme.scale(22),
              marginLeft: 20,
              fontFamily: Fonts.HELODOX_MEDIUM_FONT,
            },
          }}
        />
        <Stack.Screen
          name="PatientRecordScreen"
          component={PatientRecordScreen}
          options={{
            headerShown: true,
            title: '',
            headerTransparent: 'true',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: Theme.scale(22),
              marginLeft: 20,
              fontFamily: Fonts.HELODOX_MEDIUM_FONT,
            },
          }}
        />
        <Stack.Screen
          name="PatientDetailScreen"
          component={PatientDetailScreen}
          options={{
            headerShown: true,
            title: '',
            headerTransparent: 'true',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: Theme.scale(22),
              marginLeft: 20,
              fontFamily: Fonts.HELODOX_MEDIUM_FONT,
            },
          }}
        />
        <Stack.Screen
          name="RatingScreen"
          component={RatingScreen}
          options={{
            headerShown: true,
            title: '',
            headerTransparent: 'true',
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: Theme.scale(22),
              marginLeft: 20,
              fontFamily: Fonts.HELODOX_MEDIUM_FONT,
            },
          }}
        />
        <Stack.Screen
          name="AppointmentsScreen"
          component={AppointmentsScreen}
        />
        <Stack.Screen name="EditProfileDocter" component={EditProfileDocter} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default StackNavigation;
