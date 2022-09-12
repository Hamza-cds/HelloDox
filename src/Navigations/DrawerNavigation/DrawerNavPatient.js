import React, {Component, useState, useCallback, useFocusEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomSidebarMenu from '../../Components/DrawerMenuPatient';
import Feather from 'react-native-vector-icons/Feather';
import PatientDashboard from '../../Screens/PatientDashboard/PatientDashboard';
import AppointmentsScreen from '../../Screens/AppointmentsScreen/AppointmentsScreen';
import ContactUsScreen from '../../Screens/ContactUsScreen/ContactUsScreen';
import EditProfilePatient from '../../Screens/EditProfilePatient/EditProfilePatient';
import {View} from 'react-native';
import DrawerMenuPatient from '../../Components/DrawerMenuPatient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
            <MaterialCommunityIcons
              name="account-network-outline"
              size={22}
              color="#ffffff"
            />
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
            <Feather name="user" size={22} color="#ffffff" />
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
            <AntDesign name="phone" size={22} color="#ffffff" />
          ),
        }}
        component={ContactUsScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavPatient;
