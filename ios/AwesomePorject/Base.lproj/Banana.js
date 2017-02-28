import React, { Component } from 'react';
import { Image } from 'react-native';

class Banana extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <Image source={ pic } style={{ width: 90, height: 50 }}/>
    );
  }
}

export default Banana;
