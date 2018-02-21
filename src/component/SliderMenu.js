import { StyleSheet, Text, View, ListView } from 'react-native';
import React, { Component } from 'react';


export default class SliderMenu extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  render() {
    let {onPress, title} = this.props;

    const styles = StyleSheet.create({
      top: {
        flex: 3,
        backgroundColor: 'red',
      },
      menu: {
        flex: 7,
        backgroundColor: 'blue',
      },
      list: {
        alignItems: 'flex-end'
      }
    });

    return (
      <View style={{flex: 1}}>
        <View style={styles.top}></View>

        <View style={styles.menu}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
        </View>

      </View>
    );
  }
};
