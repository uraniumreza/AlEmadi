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
import BookAppointment from './src/components/BookAppointment';
import DoctorsList from './src/components/DoctorsList';

export default class AlEmadi extends Component {
  render() {
    return (
      <BookAppointment/>
    );
  }
}

AppRegistry.registerComponent('AlEmadi', () => AlEmadi);
