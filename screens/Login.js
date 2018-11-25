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
  Animated,
  Dimensions,
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
  StatusBar,
  UIManager
} from "react-native";
import {
  LOGO_CONTAINER_DEF,
  LOGO_CONTAINER_COLLAPSE,
  LOGO_HEIGHT_DEF,
  LOGO_HEIGHT_COLLAPSE,
  LOGO_WIDTH_DEF,
  LOGO_WIDTH_COLLAPSE,
  MARGIN_TOP_FORM_DEF,
  MARGIN_TOP_FORM_COLLAPSE,
  CONTAINER_DEF,
  CONTAINER_COLLAPSE,
  LOGIN_BTN_DEF,
  LOGIN_BTN_COLLAPSE,
  window
} from "../styles";
import { Button } from "native-base";
import { Tabs } from "../navigator";

export class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  constructor(props) {
    super(props);
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);

    this.logoContainer = new Animated.Value(LOGO_CONTAINER_DEF);
    this.logoHeight = new Animated.Value(LOGO_HEIGHT_DEF);
    this.logoWidth = new Animated.Value(LOGO_WIDTH_DEF);
    this.marginTopForm = new Animated.Value(MARGIN_TOP_FORM_DEF);
    this.container = new Animated.Value(CONTAINER_DEF);
    this.loginBtn = new Animated.Value(LOGIN_BTN_DEF);
  }
  state = {
    hideOptionalComponent: false
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

  _keyboardDidShow = () => {
    this.setState({
      ...this.state,
      hideOptionalComponent: true
    });
    Animated.parallel([
      Animated.timing(this.logoContainer, {
        toValue: LOGO_CONTAINER_COLLAPSE,
        duration: 400
      }),
      Animated.timing(this.logoHeight, {
        toValue: LOGO_HEIGHT_COLLAPSE,
        duration: 400
      }),
      Animated.timing(this.logoWidth, {
        toValue: LOGO_WIDTH_COLLAPSE,
        duration: 400
      }),
      Animated.timing(this.marginTopForm, {
        toValue: MARGIN_TOP_FORM_COLLAPSE,
        duration: 400
      }),
      Animated.timing(this.container, {
        toValue: CONTAINER_COLLAPSE,
        duration: 400
      }),
      Animated.timing(this.loginBtn, {
        toValue: LOGIN_BTN_COLLAPSE,
        duration: 400
      })
    ]).start();
  };

  _keyboardDidHide = () => {
    this.setState({
      ...this.state,
      hideOptionalComponent: false
    });
    Animated.parallel([
      Animated.timing(this.logoContainer, {
        toValue: LOGO_CONTAINER_DEF,
        duration: 400
      }),
      Animated.timing(this.logoHeight, {
        toValue: LOGO_HEIGHT_DEF,
        duration: 400
      }),
      Animated.timing(this.logoWidth, {
        toValue: LOGO_WIDTH_DEF,
        duration: 400
      }),
      Animated.timing(this.marginTopForm, {
        toValue: MARGIN_TOP_FORM_DEF,
        duration: 400
      }),
      Animated.timing(this.container, {
        toValue: CONTAINER_DEF,
        duration: 400
      }),
      Animated.timing(this.loginBtn, {
        toValue: LOGIN_BTN_DEF,
        duration: 400
      })
    ]).start();
  };

  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" backgroundColor="#ff9523" />
        <Animated.View
          style={{
            width: "100%",
            height: this.container,
            backgroundColor: "#ff9523",
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8
          }}
        >
          <Image
            style={{ position: "absolute", height: "50%" }}
            source={require("../Assets/Background-motif.svg")}
          />
          <Animated.View
            style={{
              width: window.width,
              height: this.logoContainer,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Animated.Image
              style={{
                resizeMode: "contain",
                height: this.logoHeight,
                width: this.logoWidth
              }}
              source={require("../Assets/LOGO(detail).png")}
            />
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={{
            marginTop: this.marginTopForm,
            position: "absolute",
            alignItems: "center",
            height: window.height * 0.36,
            width: "100%"
          }}
        >
          <View
            style={{
              elevation: 5,
              width: "70%",
              flexDirection: "column",
              height: window.height * 0.28,
              borderRadius: 6,
              backgroundColor: "#f7f7f7"
            }}
          >
            <View
              style={{
                flex: 3,
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
            <View
              style={{
                flex: 1,
                marginRight: 15,
                justifyContent: "center",
                alignItems: "flex-end"
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "#f7bf3d"
                }}
              >
                Lupa password?
              </Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            width: "85%",
            position: "absolute",
            marginTop: this.loginBtn
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
        </Animated.View>
        <View style={{ width: "100%", position: "absolute", bottom: 0 }}>
          <View>
            <View
              style={{
                borderTopColor: "#c6c6c6",
                alignItems: "center",
                justifyContent: "center",
                height: window.height * 0.175,
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
                height: window.height * 0.06,
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
                <TouchableOpacity
                  onPress={() => console.log("Daftar clicked!!")}
                >
                  <Text
                    style={{
                      marginLeft: 6,
                      color: "#ff9523",
                      fontWeight: "bold"
                    }}
                  >
                    Daftar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
