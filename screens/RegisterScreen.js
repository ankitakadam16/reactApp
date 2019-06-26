import React, { Component }  from 'react';
import { Alert, ScrollView, StyleSheet, View, Text, TextInput, Picker, TouchableHighlight, ImageBackground, Image} from 'react-native';
// import { LinearGradient } from 'expo';
import { StackNavigator } from 'react-navigation';

export default  class RegisterScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {nameText: '',
                    phoneText : '',
                  location: 'India',
                  emailText:'',
                  loactionText:''
                };
    }
    submit() {
  Alert.alert( this.state.location, this.state.emailText)
}
  render(){
     const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1,}}>
      <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../assets/images/back.png')}>
      <View style={{marginTop: 20,padding:20}}>
      <View style={{flex:1,flexDirection: 'column',alignItems: 'center'}}>
      <Text style={{fontSize: 20,color:'#c37cf4'}}>Access </Text>
      <Text style={{fontWeight: 'bold',fontSize: 30,color:'#c37cf4'}}> 5000+ Engaging Videos </Text>
      </View>
      <View style={{flexDirection:"row",marginTop: 100, }}>
        <View style={{ flex: 1}}>
          <TextInput style={{height: 40,borderBottomColor: 'black', borderBottomWidth: 1}} placeholder="Name"  placeholderTextColor="#000000"  onChangeText={(text) => this.setState({nameText:text})}/>
       </View>
      </View>
      <View style={{flex:1,flexDirection: 'column',textAlign: "left" }}>
      <Text style={{fontSize: 15, marginTop: 30, textAlign: 'left',}}> Mobile Number </Text>
      </View>
      <View style={{flexDirection:"row",marginTop: 45}}>
        <View style={{ flex: 0.3}}>
        <Picker
          style={{width: 100,borderBottomColor: 'black'}}
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="+91 (India)" value="India" />
          <Picker.Item label="+1 (USA)" value="USA" />
        </Picker>
        </View>
        <View style={{ flex: 0.8}}>
          <TextInput style={{height: 40,borderBottomColor: 'black', borderBottomWidth: 1}} placeholder="" onChangeText={(text) => this.setState({phoneText:text})}/>
       </View>
      </View>
      <View style={{flexDirection:"row", }}>
        <View style={{ flex: 1,marginTop:10,}}>
          <TextInput style={{height: 40,borderBottomColor: 'black', borderBottomWidth: 1}} placeholder="Email"  placeholderTextColor="#000000"  onChangeText={(text) => this.setState({emailText:text})}/>
       </View>
      </View>
      <View style={{flexDirection:"row", }}>
        <View style={{ flex: 1,marginTop:10,}}>
          <TextInput style={{height: 40,borderBottomColor: 'black', borderBottomWidth: 1}} placeholder="Location" placeholderTextColor="#000000" onChangeText={(text) => this.setState({loactionText:text})}/>
       </View>
     </View>
     <View style={{flex:1,flexDirection:"row",alignItems: 'center',marginTop: 20,padding:50}}>
     <TouchableHighlight  style={styles.submit}  onPress={() => this.submit()}  underlayColor='#fff'>
       <Text style={styles.submitText}>Register</Text>
     </TouchableHighlight>
     </View>
      </View>
      <View style={{flex:1, justifyContent: 'flex-end',flexDirection:"column",}}>
      <View style={{ flex: 0.5}}>
      <Text>
      <Text style={{fontSize: 10}}>Already Registered?</Text>
      <Text>{"   "}</Text>
      <Text style={{fontWeight: 'bold',fontSize: 20,color:'#c37cf4'}} onPress={() => navigate('Login')} >Login</Text>
      </Text>
      </View>
      </View>
      </ImageBackground>
      </View>
    );
  }
}


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
