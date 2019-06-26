import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
// import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import NewScreen from '../screens/NewScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
    header: null,
  },
}
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};



const CalendarStack = createStackNavigator({
  Calendar:{
  screen: CalendarScreen,
    navigationOptions: {
    header: null,
  },
  }
});

CalendarStack.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'}
    />
  ),
  header: null,
};

const NewStack = createStackNavigator({
  New: NewScreen,
});

NewStack.navigationOptions = {
  tabBarLabel: 'New',
  header: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
    />
  ),
};


const navigateBar =  createBottomTabNavigator({
  HomeStack,
  CalendarStack,
  NewStack
});


const navigate = createStackNavigator({
  Login:{
          screen: LoginScreen,
          navigationOptions: {
          header: null,
        }
   },
   Tab:{
     screen: navigateBar,
     navigationOptions: {
       header: null,
     }
   },
}
);
export default createAppContainer(navigate);
