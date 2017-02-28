import React, { Component } from 'react';
import { View } from 'react-native';

export default class SizeTester extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, height: 50, backgroundColor: 'powderblue' }}></View>
        <View style={{ flex: 1, height: 100, backgroundColor: 'red' }}></View>
        <View style={{ flex: 1, height: 200, backgroundColor: 'yellow' }}></View>
      </View>
    );
  }
};
