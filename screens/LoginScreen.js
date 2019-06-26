import React, { Component }  from 'react';
import { Alert, ScrollView, StyleSheet, View, Text, TextInput, Picker, TouchableHighlight, ImageBackground, Image} from 'react-native';
// import { LinearGradient } from 'expo';
import { StackNavigator } from 'react-navigation';

export default  class LoginScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {username: '',
                    password:''
                };
    }
    submit() {
    this.props.navigation.navigate('Tab')
    // fetch('http://192.168.1.6:8000/login', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: this.state.username,
    //     password: this.state.password,
    //   }),
    // }).then((response) => response.json())
    //     .then((responseJson) => {
    //     Alert.alert('here')
    //     this.props.navigation.navigate('Tab')
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    }
  render(){
     const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1,}}>
      <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../assets/images/doctor.jpg')}>
      <View style={{marginTop: 80,}}>
      <View style={{flex:1,flexDirection: 'column',alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold',fontSize: 40,color:'#447df4'}}> Login </Text>
      <Text style={{fontSize: 10,}}> Great To See You Again </Text>
      </View>
      <View style={{flexDirection:"row",marginTop: 110,paddingLeft:50,paddingRight:50}}>
        <View style={{ flex: 1}}>
          <TextInput style={{height: 40,borderBottomColor: 'black', borderBottomWidth: 1}} placeholder="Username/Email-Id" placeholderTextColor="#000" onChangeText={(text) => this.setState({username:text})}/>
       </View>
      </View>
      <View style={{flexDirection:"row",marginTop: 30,paddingLeft:50,paddingRight:50}}>
        <View style={{ flex: 1}}>
          <TextInput style={{height: 40,borderBottomColor: 'black', borderBottomWidth: 1}} placeholder="Password" secureTextEntry={true} placeholderTextColor="#000"  onChangeText={(text) => this.setState({username:text})}/>
       </View>
      </View>
      <View style={{flex:1,flexDirection:"row",alignItems: 'center',padding:50}}>
      <TouchableHighlight  style={styles.submit}  onPress={() => this.submit()}   underlayColor='#fff'>
        <Text style={styles.submitText}>Login</Text>
      </TouchableHighlight>
      </View>
      </View>
      <View style={{flex:1, justifyContent: 'flex-end',flexDirection:"column",alignItems: 'center',marginTop:30}}>
      <View style={{ flex: 0.5}}>
      <Text style={{fontSize: 10}}>Create a new Accunt</Text>
      <View style={{alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold',fontSize: 20,color:'#4f5ff4'}} onPress={() => navigate('Register')} >Register</Text>
      </View>
      </View>
      </View>
      </ImageBackground>
      </View>
    );
  }
}

// LoginScreen.navigationOptions = {
//   title: 'Login',
// };

const styles = StyleSheet.create({
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#447df4',
    borderRadius:50,
    // borderWidth: 1,
    // borderColor: '#000000'
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
  },
  imgBackground: {
          width: '100%',
          height: '100%',
          flex: 1
  },

});
