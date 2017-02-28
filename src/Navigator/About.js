import React, { Component } from 'react';
import { View, Text, Navigator, TouchableHighlight } from 'react-native';

export default class About extends Component {
  constructor(props) {
    super(props);
  }
  _navigate(type) {
    this.props.navigator.push({
      type: 'about', // Matches route.name
      passProps: {
        type: type
      }
    })
  }
  render() {
    return (
    <TouchableHighlight onPress={ () => this._navigate('hohoho') }>
      <Text>About {this.props.type}</Text>
    </ TouchableHighlight>
    );
  }
}
