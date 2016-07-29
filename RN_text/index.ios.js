/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text> Hello {this.props.name} </Text>
    );
  }
}

class RN_text extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='aaaa'/>
        <Greeting name='bbbb'/>
        <Greeting name='cccc'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RN_text', () => RN_text);
