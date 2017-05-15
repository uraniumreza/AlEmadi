/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MessageFromCEO from './src/components/MessageFromCEO';


export default class AlEmadi extends Component {
  render() {
    return (
      <MessageFromCEO/>
    );
  }
}

AppRegistry.registerComponent('AlEmadi', () => AlEmadi);
