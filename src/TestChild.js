import React, { Component } from 'react';
import { Text } from 'react-native';

// @DD NOTE: use "setNativeProps" for including custom child component inside navigator

export default class Child extends Component {
  render() {
    return (
      <Text>{ this.props.val } </Text>
    );
  }
};
