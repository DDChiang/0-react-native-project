import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class TextTester extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40 }}
          placeholder='whoo. time to type'
          onChangeText={ (text) => this.setState({text}) }
          />
        <Text>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
};
