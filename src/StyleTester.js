import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Blinker from './Blinker';
import SizeTester from './SizeTester';

export default class StyleTester extends Component {
  render() {
    var initText = 'Hello! The dweebies from the future are here';

    return (
      <View style={{ flex: 1 }}>
        <Blinker text={ initText }/>
        <SizeTester />
        <View style={ styles.master }>
          <View style={ styles.one }/>
          <View style={ styles.two }/>
          <View style={ styles.three }/>
        </View>
      </View>
    );
  }
}

// Try setting `justifyContent` to `center`.
// Try setting `flexDirection` to `row`.

const styles = StyleSheet.create({
  master: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-between'
    flexDirection: 'row',
    justifyContent: 'center'
  },
  one: {
    backgroundColor: 'red',
    width: 50,
    height: 50
  },
  two: {
    backgroundColor: 'blue',
    width: 50,
    height: 50
  },
  three : {
    backgroundColor: 'green',
    width: 50,
    height: 50
  }
});
