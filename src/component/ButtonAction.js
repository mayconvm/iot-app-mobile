import { Button, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';


export default class ButtonAction extends React.Component {
  render() {
    let {onPress, title} = this.props;

    return (
      <Button
          title={title}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          onPress={onPress}
          />
    );
  }
};
