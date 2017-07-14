import React from 'react'
import { View, AppRegistry } from 'react-native'
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList></AlbumList>
  </View>
);

AppRegistry.registerComponent('albums', () => App);
