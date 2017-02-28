/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

import Banana from './src/Banana';
import TestExportClass from './src/TestExportClass';
import StyleTester from './src/StyleTester';
import TextTester from './src/TextTester';
import TestListView from './src/TestListView';
import TestFetch from './src/TestFetch';
import TestScene from './src/TestScene';
import TestNavigator from './src/TestNavigator';

// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

class HelloWorld extends Component {
  render() {
    return (
      // <Banana />
      // <TestExportClass />
      // <View style={{ flex: 1 }}>
      //   <StyleTester />
      // </View>
      // <TextTester />
      // <TestListView />
      // <TestFetch />
      // <TestScene />
      <TestNavigator />
    );
  }
}

AppRegistry.registerComponent('AwesomePorject', () => HelloWorld);
