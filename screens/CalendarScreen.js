import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Alert, ImageBackground, Image } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Carousel from 'react-native-carousel'
import moment from "moment";

export default class CalendarScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    let dates = ['2019-06-09','2019-06-20','2019-06-26','2019-07-26']
    let customDatesStyles = [];
    for (var i = 0; i < dates.length; i++) {
        customDatesStyles.push({
          date: dates[i],
          style: {backgroundColor: '#ffffff'},
          textStyle: {color: '#e34949'},
          containerStyle: [],
        });
    }
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
      <View style={{flex:1,backgroundColor:'#ffffff',paddingBottom:50}}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          todayTextStyle={{fontWeight: 'bold'}}
          todayBackgroundColor={'#dedede'}
          customDatesStyles={customDatesStyles}
          selectedDayColor="transparent"
          selectedDayTextColor="#faf137"
          // minDate={today}
        />
        </View>
        <View style={{flex:1,marginTop:10}}>
        <ScrollView style={{flex:1}}>
        <View style={styles.cont1} >
        <Text> Today Event </Text>
        <View style = {styles.lineStyle} />
        </View>
        <View style={styles.cont2} >
        <Text> Daily Whatsaap Status</Text>
        <View style = {styles.lineStyle} />
        <Carousel width={375} hideIndicators={true} animate={false}>
              <View style={styles.box}>
              <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../assets/images/doctor.jpg')}>
              </ImageBackground>
              <View>
                <Text style={{fontSize:10}}> Daily Whatsaap Status</Text>
              </View>
              </View>
              <View style={styles.box}>
              <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../assets/images/doctor.jpg')}>
              </ImageBackground>
              <View>
                <Text  style={{fontSize:10}}> Daily Whatsaap Status</Text>
              </View>
              </View>
              <View style={styles.box}>
              <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../assets/images/doctor.jpg')}>
              </ImageBackground>
              <View>
                <Text  style={{fontSize:10}}> Daily Whatsaap Status</Text>
              </View>
              </View>
          </Carousel>
        </View>
        <View style={styles.container2} >
        <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../assets/images/doctor.jpg')}>
        </ImageBackground>
        </View>
          </ScrollView>
          </View>
        </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    marginTop: 5,
  },

 container2:{
    margin:5,
    flex:1,
    backgroundColor:'#d9d9d9',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    height:200
   },
   cont1:{
      margin:8,
      padding:10,
      flex:1,
      backgroundColor:'#ffffff',
      borderRadius:10,
      height:100
     },
     cont2:{
        margin:8,
        padding:10,
        flex:1,
        backgroundColor:'#ffffff',
        borderRadius:10,
        height:300
       },
     lineStyle:{
      borderWidth: 0.5,
      borderColor:'#525252',
      margin:10,
 },
   imgBackground: {
           width: '100%',
           height: '100%',
           flex: 1,
   },
   container3: {
  width: 325,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
},
box:{
  borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    width: 325,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding:10
}
});
