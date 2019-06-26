import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';


export default class HomeScreen extends Component {

  render(){
    return(
      <Calendar
      minDate={Moment().startOf('day')}
      maxDate={Moment().add(10, 'years').startOf('day')}
      />
    )
  }
}

const styles = StyleSheet.create({

});
