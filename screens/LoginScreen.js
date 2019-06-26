import React, { Component }  from 'react';
import { Alert, ScrollView, StyleSheet, View, Text, TextInput, Picker, TouchableHighlight, ImageBackground, Image} from 'react-native';
// import { LinearGradient } from 'expo';
import { StackNavigator } from 'react-navigation';

export default  class LoginScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {number: '',
                  language: 'India'
                };
    }
    submit() {
        Alert.alert( this.state.language,this.state.number)
    }
  render(){
     const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1,}}>
      <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../assets/images/back.png')}>
      <View style={{marginTop: 20,}}>
      <View style={{flex:1,flexDirection: 'column',alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold',fontSize: 40,color:'#c37cf4'}}> Login </Text>
      <Text style={{fontSize: 10,}}> Great To See You Again </Text>
      </View>
      <View style={{flex:1,flexDirection: 'column',textAlign: "left" }}>
      <Text style={{fontSize: 15, marginTop: 90, textAlign: 'left',}}> Mobile Number </Text>
      </View>
      <View style={{flexDirection:"row",marginTop: 110}}>
        <View style={{ flex: 0.3}}>
        <Picker
          style={{width: 100,borderColor:'black', borderWidth: 1,}}
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="+91 (India)" value="India" />
          <Picker.Item label="+1 (USA)" value="USA" />
        </Picker>
        </View>
        <View style={{ flex: 0.5}}>
          <TextInput style={{height: 40,borderBottomColor: 'black', borderBottomWidth: 1}} placeholder="" onChangeText={(text) => this.setState({number:text})}/>
       </View>
      </View>
      <View style={{flex:1,alignItems: 'center',marginTop: 50}}>
        <Text style={{fontSize: 10,}}> We Will Send You Four Digit OTP </Text>
      </View>
      <View style={{flex:1,flexDirection:"row",alignItems: 'center',padding:50}}>
      <TouchableHighlight  style={styles.submit}  onPress={() => this.submit()}   underlayColor='#fff'>
        <Text style={styles.submitText}>Next</Text>
      </TouchableHighlight>
      </View>
      <View style={{flex:1,alignItems: 'center',marginTop: 15}}>
        <Text style={{fontSize: 10,}}> OR </Text>
      </View>
      <View style={{flex:1,flexDirection:"row",alignItems: 'center',marginTop: 10,padding:50}}>
      <TouchableHighlight  style={styles.submit}  onPress={() => this.submit()}  underlayColor='#fff'>
        <Text style={styles.submitText}>Login With Truecaller</Text>
      </TouchableHighlight>
      </View>
      </View>
      <View style={{flex:1, justifyContent: 'flex-end',flexDirection:"column",alignItems: 'center',marginTop:30}}>
      <View style={{ flex: 0.5}}>
      <Text style={{fontSize: 10}}>Create a new Accunt</Text>
      <View style={{alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold',fontSize: 20,color:'#c37cf4'}} onPress={() => navigate('Register')} >Register</Text>
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
    backgroundColor:'#b883d0',
    borderRadius:50,
    borderWidth: 1,
    borderColor: '#fff'
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
