import React, {Component} from 'react';
import { Alert, ScrollView, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
import { StackNavigator } from 'react-navigation';
// import createStackNavigator from '../navigation/MainTabNavigator';

export default class MainScreen extends Component {
  render(){
     const {navigate} = this.props.navigation;
    return (
      <View>
      <TouchableHighlight  style={styles.submit}  onPress={() => navigate('Login')}  underlayColor='#fff'>
        <Text style={styles.submitText}>Login</Text>
      </TouchableHighlight>
      <TouchableHighlight  style={styles.submit}  onPress={() => navigate('Register')}  underlayColor='#fff'>
        <Text style={styles.submitText}>Register</Text>
      </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#b883d0',
    borderRadius:50,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
  },
});

// const App = StackNavigator({
//    Login: LoginScreen,
//  });
