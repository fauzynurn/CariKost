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
    width: Dimensions.get("window").width
  };

  componentDidMount() {
    console.log("height: " + this.state.height);
  }
  render() {
    return (
      <React.Fragment>
        <View
          style={{
            width: "100%",
            height: "50%",
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
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%"
          }}
        >
          <View
            style={{
              elevation: 5,
              width: "75%",
              height: 185,
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
        <View style={{ width: "85%", height: 90 }}>
          <Button
            style={{ marginTop: 130, padding: 20, alignSelf: "flex-end" }}
            rounded
            warning
            onPress={() => this.props.navigation.navigate("Tabs")}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Masuk</Text>
          </Button>
        </View>
        <View
          style={{
            marginTop: 120,
            borderBottomColor: "#c6c6c6",
            borderBottomWidth: 1
          }}
        />
        <Text
          style={{
            textAlign: "center",
            color: "#bababa",
            fontWeight: "bold",
            marginTop: 15
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
        <View
          style={{
            borderBottomColor: "#c6c6c6",
            borderBottomWidth: 1
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 14
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
