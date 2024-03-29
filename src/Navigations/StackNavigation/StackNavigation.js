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
            title: 'Phone Number',
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
        <Stack.Screen name="PatientDashboard" component={PatientDashboard} />
        <Stack.Screen name="DocterDashboard" component={DocterDashboard} />
        <Stack.Screen
          name="DocterProfileScreen"
          component={DocterProfileScreen}
        />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default StackNavigation;
