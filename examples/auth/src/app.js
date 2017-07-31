import React , { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyCVmUZW_KUgh7AmOt1caCPWj_hg9SZOeyc",
    authDomain: "auth-6671f.firebaseapp.com",
    databaseURL: "https://auth-6671f.firebaseio.com",
    projectId: "auth-6671f",
    storageBucket: "auth-6671f.appspot.com",
    messagingSenderId: "79604373997"
  });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
        </View>
      );
  }
}

export default App;
