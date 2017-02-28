import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Blinker extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // Toggle state every sec
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    return (
      <View style={{ opacity: this.state.showText }}>
       <Text style={ styles.bigRed } >I AM Big Red</Text>
       <Text style={ styles.red } >{ this.props.text } red</Text>
       <Text style={ styles.bigBlue }>I AM Big Blue</Text>
       <Text style={ styles.blue }>{ this.props.text } blue</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  bigRed: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red'
  },
  bigBlue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue'
  },
  red: {
    color: 'red'
  },
  blue: {
    color: 'blue'
  }
});
