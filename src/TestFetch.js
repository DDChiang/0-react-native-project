import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';

// @DD TODO: must expand on this

export default class TestFetch extends Component {
  constructor(props) {
    super(props);
    const self = this;

    this.state = { movies: 'Loading' };
  }

  static get defaultProps() {
    return {
      movies: 'Loading'
    };
  }

  componentDidMount() {
    this.getMovies().done();
  }

  /**
  * new way
  **/
  async getMovies() {
    try {
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let responseJson = await response.json();

      this.setState({ movies: responseJson.movies });
    } catch(error) {
      console.error(error);
    }
  }

  /**
  * old way
  **/
  // getMovies() {
  //   return fetch('https://facebook.github.io/react-native/movies.json')
  //     .then((res) => {
  //       self.setState({ movies: res._bodyInit });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    const movies = JSON.stringify(this.state.movies);

    return (
      <View>
        <Text>
          { movies }
        </Text>
      </View>
    );
  }
};
