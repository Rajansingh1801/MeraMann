import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../component/home';
import Chat from '../component/Chat';
import Add from '../component/add';
import Find from '../component/find';
import Setting from '../component/setting';

const Tab = createBottomTabNavigator();

const Tabnav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          backgroundColor: '#0A2647',
          elevation: 0,
          borderRadius: 20,
          height: 90,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="home"
                size={26}
                style={{color: focused ? 'white' : 'gray'}}
              />
              <Text style={{color: focused ? 'white' : 'gray'}}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="chat"
                size={26}
                style={{color: focused ? 'white' : 'gray'}}
              />
              <Text style={{color: focused ? 'white' : 'gray'}}>Chat</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="add-circle"
                size={60}
                style={{
                  color: focused ? 'white' : 'gray',
                  position: 'absolute',
                  top: -40,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={Find}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="search"
                size={26}
                style={{color: focused ? 'white' : 'gray'}}
              />
              <Text style={{color: focused ? 'white' : 'gray'}}>Find</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="settings"
                size={26}
                style={{color: focused ? 'white' : 'gray'}}
              />

              <Text style={{color: focused ? 'white' : 'gray'}}>Setting</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabnav;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#2C74B3',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 5,
    shadowRadius: 3.5,
  },
});
