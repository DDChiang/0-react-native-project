import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Child extends Component {
  render() {
    return (
      <Text>{ this.props.val } </Text>
    );
  }
};
