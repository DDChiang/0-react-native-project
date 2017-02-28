import React, { Component , PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class TestScene extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  render() {
    return (
      <View>
        <Text>Current Scene: {this.props.title}.</Text>
        <TouchableHighlight onPress={this.props.onForward} >
          <Text>Next</Text>
        </TouchableHighlight >
        <TouchableHighlight onPress={this.props.onBackward} >
          <Text>Prev</Text>
        </TouchableHighlight >
      </View>
    );
  }
};

TestScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};
