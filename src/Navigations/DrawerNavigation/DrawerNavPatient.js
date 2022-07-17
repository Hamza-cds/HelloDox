import React, {Component, useState, useCallback, useFocusEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomSidebarMenu from '../../Components/DrawerMenuPatient';
import Feather from 'react-native-vector-icons/Feather';
import PatientDashboard from '../../Screens/PatientDashboard/PatientDashboard';
import AppointmentsScreen from '../../Screens/AppointmentsScreen/AppointmentsScreen';
import ContactUsScreen from '../../Screens/ContactUsScreen/ContactUsScreen';
import EditProfilePatient from '../../Screens/EditProfilePatient/EditProfilePatient';
import {View} from 'react-native';
import AppointmentConfirmScreen from '../../Screens/AppointmentConfirmScreen/AppointmentConfirmScreen';
import DocterDashboard from '../../Screens/DocterDashboard/DocterDashboard';
import DrawerMenuPatient from '../../Components/DrawerMenuPatient';
import DrawerMenuDocter from '../../Components/DrawerMenuDocter';
import EditProfileDocter from '../../Screens/EditProfileDocter/EditProfileDocter';
import AdminAccessScreen from '../../Screens/AdminAccessScreen/AdminAccessScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

const DrawerNavPatient = props => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#FFFFFF',
        labelStyle: {
          color: '#FFFFFF',
        },
      }}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',

        drawerItemStyle: {
          marginTop: 10,
        },
      }}
      drawerContent={props => (
        <DrawerMenuPatient
          {...props}
          screenProps={{drawerName: 'Name'}}
          onPress={() =>
            props.navigation.reset({
              index: 0,
              routes: [{name: 'WelcomeScreen'}],
            })
          }
        />
      )}>
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: 'Home',
          headerStyle: {},
          drawerIcon: ({focused}) => (
            <Feather name="home" size={22} color="#ffffff" />
          ),
        }}
        component={PatientDashboard}
      />
      <Drawer.Screen
        name="Appointment"
        options={{
          drawerLabel: 'Appointment',
          headerStyle: {},
          drawerIcon: ({focused}) => (
            <Feather name="home" size={22} color="#ffffff" />
          ),
        }}
        component={AppointmentsScreen}
      />
      <Drawer.Screen
        name="Edit Profile"
        options={{
          drawerLabel: 'Edit Profile',
          headerStyle: {},
          drawerIcon: ({focused}) => (
            <Feather name="home" size={22} color="#ffffff" />
          ),
        }}
        component={EditProfilePatient}
      />
      <Drawer.Screen
        name="Contact Us"
        options={{
          drawerLabel: 'Contact Us',
          headerStyle: {},
          drawerIcon: ({focused}) => (
            <Feather name="home" size={22} color="#ffffff" />
          ),
        }}
        component={ContactUsScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavPatient;
