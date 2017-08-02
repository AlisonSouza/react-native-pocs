import React , { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCVmUZW_KUgh7AmOt1caCPWj_hg9SZOeyc",
      authDomain: "auth-6671f.firebaseapp.com",
      databaseURL: "https://auth-6671f.firebaseio.com",
      projectId: "auth-6671f",
      storageBucket: "auth-6671f.appspot.com",
      messagingSenderId: "79604373997"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

renderContent() {

  switch (this.state.loggedIn) {
    case true:
      return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      );
    case false:
      return <LoginForm />
    default:
      return <Spinner size="large"/>
  }
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
