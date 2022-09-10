import React, {Component, useState, useCallback, useFocusEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomSidebarMenu from '../../Components/DrawerMenuPatient';
import Feather from 'react-native-vector-icons/Feather';
import AppointmentsScreen from '../../Screens/AppointmentsScreen/AppointmentsScreen';
import DocterDashboard from '../../Screens/DocterDashboard/DocterDashboard';
import DrawerMenuDocter from '../../Components/DrawerMenuDocter';
import EditProfileDocter from '../../Screens/EditProfileDocter/EditProfileDocter';
import AdminAccessScreen from '../../Screens/AdminAccessScreen/AdminAccessScreen';
import AppointmentDocScreen from '../../Screens/AppointmentDocScreen/AppointmentDocScreen';

const Drawer = createDrawerNavigator();

const DrawerNavDocter = props => {
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
        <DrawerMenuDocter
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
        component={DocterDashboard}
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
        component={AppointmentDocScreen}
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
        component={EditProfileDocter}
      />
      <Drawer.Screen
        name="Admin Access"
        options={{
          drawerLabel: 'Admin Access',
          headerStyle: {},
          drawerIcon: ({focused}) => (
            <Feather name="home" size={22} color="#ffffff" />
          ),
        }}
        component={AdminAccessScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavDocter;
