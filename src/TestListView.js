import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';

// @dd TODO: use array of objects as dataSource
export default class TestListView extends Component {
  constructor(props) {
    super(props);
    const data = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: data.cloneWithRows([
        'aaa', 'bbbb', 'ccc', 'ccc', 'ccc', 'ccc', 'ccc', 'fffff'
      ])
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={(rowData) => <Text>{rowData}</Text> }
        />
      </View>
    );
  }
};
