/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import Image from "react-native-remote-svg";
import {
  Platform,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";
import { Button } from "native-base";
import Home from "./screens/Home";
import { Tabs } from "./navigator";
import { LoginStackNav } from "./screens/Login";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" backgroundColor="#ff9523" />
        <LoginStackNav />
      </React.Fragment>
    );
  }
}
