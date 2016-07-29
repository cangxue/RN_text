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
  TextInput,
  View,
  ScrollView,
} from 'react-native';

class RN_text extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <ScrollView>
      <View style={{padding: 10, height: 100, backgroundColor: 'skyblue'}}>
      </View>
      <View style={{padding: 10, height: 100, backgroundColor: 'steelblue'}}>
      </View>
      <View style={{padding: 10, height: 100, backgroundColor: 'skyblue'}}>
      </View>
      <View style={{padding: 10, height: 100, backgroundColor: 'steelblue'}}>
      </View>
      <View style={{padding: 10, height: 100, backgroundColor: 'skyblue'}}>
      </View>
      <View style={{padding: 10, height: 100, backgroundColor: 'steelblue'}}>
      </View>
      <View style={{padding: 10, height: 100, backgroundColor: 'skyblue'}}>
      </View>
      <View style={{padding: 10, height: 100, backgroundColor: 'steelblue'}}>
      </View>
      </ScrollView>
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
