import React, { Component } from 'react';
import { View, Text, Navigator, TouchableHighlight } from 'react-native';

import TestScene from './TestScene';
import Home from './Navigator/Home';
import About from './Navigator/About';

export default class TestNavigator extends Component {
  renderScene(route, navigator) {
    if (route.type === 'home') {
      return (
        <Home navigator={ navigator } {...route.passProps} />
      );
    } else if (route.type === 'about' ) {
      return (
        <About navigator={ navigator } {...route.passProps} />
      )
    }
  }
  render() {
    // const routes = [
    //   {title: 'Pony and the RainHorse', type: 'home', index: 0},
    //   {title: 'Greenbacks Horse Scene', type: 'about', index: 1},
    //   {title: 'ooooooooo!', type: 'ran', index: 2}
    // ];
    return (
      <Navigator
        initialRoute={{ type: 'home' }}
        renderScene={ this.renderScene }
        configureScene={(route, routeStack) =>
          // More transitions: https://facebook.github.io/react-native/docs/navigator.html#configurescene
          Navigator.SceneConfigs.FloatFromBottom }
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
              {
                if (route.type === 'home') {
                  return null;
                } else {
                  // can return custom component inside <TouchableHighlight /> by providing child component w/ "setNativeProps"
                  // https://facebook.github.io/react-native/docs/direct-manipulation.html#composite-components-and-setnativeprops
                  return (
                    <TouchableHighlight onPress={() => navigator.pop()}>
                      <Text>Back</Text>
                    </TouchableHighlight>
                  );
                }
              },
              RightButton: (route, navigator, index, navState) =>
              {
                if (route.type === 'about') {
                  return null;
                } else {
                  return (
                    <TouchableHighlight onPress={() => navigator.push({type: 'about'})}>
                      <Text>About</Text>
                    </TouchableHighlight>
                  );
                }
              },
              Title: (route, navigator, index, navState) =>
              { return <Text>Random Title!</Text>; },
            }}
            style={{backgroundColor: 'gray'}}
          />
        }
        style={{ padding: 100 }}
      />
    );
  }
};
