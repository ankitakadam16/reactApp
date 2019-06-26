import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text,TouchableOpacity, Alert } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Calendar from 'react-native-calendar';
import Autocomplete from 'react-native-autocomplete-input'
export default class NewScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {patientName: '',
                  patientemailId:'',
                  phone:'',
                  top:'',
                  slot:'',

              };
  }
  submit(){
     Alert.alert('here')
    fetch('http://localhost:8000/api/articles/categoryFull/?name__contains=d', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         // this.setState({
         //    data: responseJson
         // })
      })
      .catch((error) => {
         console.error(error);
      });
  }
render(){
  const { query } = this.state;

  const data = 'a';
  return (
    <Autocomplete
      data={data}
      defaultValue={query}
      onChangeText={text => this.setState({ query: text })}
      renderItem={({ item, i }) => (
        <TouchableOpacity onPress={ this.setState({ query: item })}>
          <Text>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
}

NewScreen.navigationOptions = {
  title: 'New Appointment',
};

const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  }
});
