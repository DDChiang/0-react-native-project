import React, { Component } from 'react';
import { View, Text, Navigator, TouchableHighlight } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  _navigate(type) {
    this.props.navigator.push({
      type: 'home', // Matches route.name
      passProps: {
        type: type
      }
    })
  }
  render() {
    return (
    <TouchableHighlight onPress={ () => this._navigate('random phrase passed down') }>
      <Text>Welcome Home {this.props.type}</Text>
    </ TouchableHighlight>
    );
  }
}
