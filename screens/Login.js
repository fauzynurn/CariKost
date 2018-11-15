/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import Image from "react-native-remote-svg";
import { createStackNavigator } from "react-navigation";
import {
  Text,
  Dimensions,
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Home from "./Home";
import { Button } from "native-base";
import { Tabs } from "../navigator";

export class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  state = {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    formContainer: Dimensions.get("window").height * 0.29
  };

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentDidMount() {
    console.log(this.state);
  }

  _keyboardDidShow = () => {
    this.setState({
      ...this.state,
      formContainer: this.state.height * 0.15
    });
  };

  _keyboardDidHide = () => {
    this.setState({
      ...this.state,
      formContainer: Dimensions.get("window").height * 0.29
    });
  };

  render() {
    return (
      <React.Fragment>
        <View
          style={{
            width: "100%",
            height: "48%",
            backgroundColor: "#ff9523",
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8
          }}
        >
          <Image
            style={{ position: "absolute", height: "50%" }}
            source={require("../Assets/Background-motif.svg")}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "75%",
              width: "100%"
            }}
          >
            <Image source={require("../Assets/LOGO(detail).png")} />
          </View>
        </View>
        <View
          style={{
            marginTop: this.state.formContainer,
            position: "absolute",
            alignItems: "center",
            height: this.state.height * 0.36,
            width: "100%"
          }}
        >
          <View
            style={{
              elevation: 5,
              width: "70%",
              height: "70%",
              borderRadius: 6,
              backgroundColor: "#f7f7f7"
            }}
          >
            <Text
              style={{
                position: "absolute",
                bottom: 8,
                fontSize: 14,
                right: 8,
                fontWeight: "bold",
                color: "#f7bf3d"
              }}
            >
              Lupa password?
            </Text>
            <View
              style={{
                width: "100%",
                height: 150,
                borderRadius: 6,
                backgroundColor: "white"
              }}
            >
              <Text
                style={{
                  color: "#c2c3c4",
                  marginLeft: 15,
                  fontWeight: "bold",
                  marginTop: 15,
                  fontSize: 15
                }}
              >
                Username
              </Text>
              <TextInput
                style={{
                  flexDirection: "column",
                  alignSelf: "center",
                  width: "80%",
                  height: 40,
                  backgroundColor: "white"
                }}
                placeholder="Username"
              />
              <View
                style={{ borderBottomColor: "#c6c6c6", borderBottomWidth: 1 }}
              />
              <Text
                style={{
                  color: "#c2c3c4",
                  marginLeft: 15,
                  fontWeight: "bold",
                  marginTop: 7,
                  fontSize: 15
                }}
              >
                Password
              </Text>
              <TextInput
                style={{
                  flexDirection: "column",
                  alignSelf: "center",
                  width: "80%",
                  height: 40,
                  backgroundColor: "white"
                }}
                placeholder="Password"
              />
            </View>
          </View>
        </View>
        <View
          style={{ backgroundColor: "green", height: this.state.height * 0.1 }}
        />
        <View
          style={{
            width: "85%",
            position: "relative",
            backgroundColor: "red"
          }}
        >
          <Button
            style={{
              padding: 14,
              alignSelf: "flex-end"
            }}
            rounded
            warning
            onPress={() => this.props.navigation.navigate("Tabs")}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Masuk</Text>
          </Button>
        </View>
        <View
          style={{ backgroundColor: "blue", height: this.state.height * 0.05 }}
        />
        <View
          style={{
            borderTopColor: "#c6c6c6",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "skyblue",
            height: this.state.height * 0.175,
            borderTopWidth: 1
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#bababa",
              fontWeight: "bold"
            }}
          >
            Atau masuk dengan
          </Text>
          <View
            style={{
              width: "100%",
              height: 70,
              marginTop: 15,
              flexDirection: "row",
              justifyContent: "space-evenly"
            }}
          >
            <Button
              onPress={() => console.log("Facebook clicked!!")}
              style={{
                backgroundColor: "#3a5b9b",
                padding: 55,
                borderRadius: 9
              }}
            >
              <Image
                style={{ width: 35, height: 35 }}
                source={require("../Assets/Facebook-Logo-image.png")}
              />
            </Button>
            <Button
              onPress={() => console.log("Google clicked!!")}
              style={{ borderRadius: 9, padding: 55 }}
              danger
            >
              <Image
                style={{ width: 35, height: 35 }}
                source={require("../Assets/Google-Logo-image.png")}
              />
            </Button>
          </View>
        </View>
        <View
          style={{
            borderTopColor: "#c6c6c6",
            borderTopWidth: 1,
            width: "100%",
            height: this.state.height * 0.06,
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            bottom: 0
          }}
        >
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <Text style={{ color: "#bababa", fontWeight: "bold" }}>
              Belum punya akun?
            </Text>
            <TouchableOpacity onPress={() => console.log("Daftar clicked!!")}>
              <Text
                style={{ marginLeft: 6, color: "#ff9523", fontWeight: "bold" }}
              >
                Daftar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export const LoginStackNav = createStackNavigator(
  {
    Login,
    Tabs
  },
  {
    navigationOptions: {
      header: null
    },
    cardStyle: {
      backgroundColor: "white"
    }
  }
);
