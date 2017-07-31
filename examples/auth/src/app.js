import React , { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


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
        <LoginForm />
      </View>
    );
  }
}

export default App;
