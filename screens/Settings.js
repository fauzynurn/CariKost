import React, { Component } from "react";
import {
  Text,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Image from "react-native-remote-svg";
class Settings extends Component {
  state = {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  };
  render() {
    return (
      <React.Fragment>
        <View style={{ height: "100%", backgroundColor: "#efefef" }}>
          <View style={{ backgroundColor: "#efefef", height: 60 }}>
            <View
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                backgroundColor: "#ff9523"
              }}
            >
              <View style={{ flex: 0, flexDirection: "row", padding: 15 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Image
                    style={{ width: 25, height: 25 }}
                    source={require("../Assets/Back-Button-Icon-White.svg")}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 19,
                    marginLeft: 15,
                    color: "white",
                    fontWeight: "bold"
                  }}
                >
                  Pengaturan
                </Text>
              </View>
            </View>
          </View>
          <ScrollView>
            <View
              style={{
                flexDirection: "column",
                height: 190,
                justifyContent: "center",
                backgroundColor: "white"
              }}
            >
              <View
                style={{
                  width: 200,
                  height: 170,
                  alignSelf: "center",
                  flexDirection: "row"
                }}
              >
                <View style={{ flex: 4 }}>
                  <View
                    style={{
                      alignSelf: "center",
                      width: 150,
                      flex: 3
                    }}
                  >
                    <Image
                      source={require("../Assets/user.png")}
                      style={{
                        alignSelf: "center",
                        width: 100,
                        height: 100
                      }}
                    />
                    <View
                      style={{
                        position: "absolute",
                        right: 0,
                        justifyContent: "center",
                        top: "30%"
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => console.log("camera clicked!")}
                      >
                        <Image
                          source={require("../Assets/camera.png")}
                          style={{
                            alignSelf: "flex-end",
                            width: 40,
                            height: 40
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1.8,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        flex: 3,
                        justifyContent: "center",
                        height: "100%"
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>Rinaldi Pasya</Text>
                      <Text>+62812345678</Text>
                    </View>
                    <View
                      style={{
                        height: "100%",
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                        justifyContent: "center",
                        flex: 1
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => console.log("edit clicked!")}
                      >
                        <Image
                          source={require("../Assets/edit.svg")}
                          style={{
                            alignSelf: "center",
                            width: 25,
                            height: 25
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => console.log("change pass clicked!")}
            >
              <View
                style={{
                  marginTop: 10,
                  width: "100%",
                  height: 100,
                  flexDirection: "column",
                  backgroundColor: "white"
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    flex: 2
                  }}
                >
                  <Text
                    style={{ fontSize: 18, marginLeft: 25, fontWeight: "bold" }}
                  >
                    Other Settings
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    flex: 2,
                    flexDirection: "row"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      textAlignVertical: "center",
                      flex: 3,
                      marginLeft: 25
                    }}
                  >
                    Change Password
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center"
                    }}
                  >
                    <Image
                      source={require("../Assets/setting_detail.png")}
                      style={{
                        alignSelf: "center",
                        width: 35,
                        height: 35
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <View
              style={{
                marginTop: 10,
                width: "100%",
                height: 230,
                flexDirection: "column",
                backgroundColor: "white"
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  flex: 2
                }}
              >
                <Text
                  style={{ fontSize: 18, marginLeft: 25, fontWeight: "bold" }}
                >
                  Information
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flex: 2,
                  justifyContent: "center",
                  flexDirection: "row",
                  borderBottomColor: "#e2e2e2",
                  borderBottomWidth: 1
                }}
                onPress={() => console.log("Setting detail clicked!!")}
              >
                <Text
                  style={{
                    fontSize: 15,
                    textAlignVertical: "center",
                    flex: 3,
                    marginLeft: 25
                  }}
                >
                  Terms and Condition
                </Text>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center"
                  }}
                >
                  <Image
                    source={require("../Assets/setting_detail.png")}
                    style={{
                      alignSelf: "center",
                      width: 35,
                      height: 35
                    }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 2,
                  justifyContent: "center",
                  flexDirection: "row",
                  borderBottomColor: "#e2e2e2",
                  borderBottomWidth: 1
                }}
                onPress={() => console.log("Setting detail clicked!!")}
              >
                <Text
                  style={{
                    fontSize: 15,
                    textAlignVertical: "center",
                    flex: 3,
                    marginLeft: 25
                  }}
                >
                  Privacy Policy
                </Text>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center"
                  }}
                >
                  <Image
                    source={require("../Assets/setting_detail.png")}
                    style={{
                      alignSelf: "center",
                      width: 35,
                      height: 35
                    }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 2,
                  justifyContent: "center",
                  flexDirection: "row",
                  borderBottomColor: "#e2e2e2",
                  borderBottomWidth: 1
                }}
                onPress={() => console.log("Setting detail clicked!!")}
              >
                <Text
                  style={{
                    fontSize: 15,
                    textAlignVertical: "center",
                    flex: 3,
                    marginLeft: 25
                  }}
                >
                  FAQ
                </Text>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center"
                  }}
                >
                  <Image
                    source={require("../Assets/setting_detail.png")}
                    style={{
                      alignSelf: "center",
                      width: 35,
                      height: 35
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 20,
                marginBottom: 20,
                justifyContent: "center",
                flex: 2,
                flexDirection: "row"
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  textAlignVertical: "center",
                  flex: 3,
                  color: "#bababa",
                  marginLeft: 25
                }}
              >
                Version 1.5.4
              </Text>
            </View>
          </ScrollView>
        </View>
      </React.Fragment>
    );
  }
}

export default Settings;

{
  /* <Image
  source={require("../Assets/user.png")}
  style={{ alignSelf: "center", width: 80, height: 80 }}
/>
<View style={{ flexDirection: "row", backgroundColor: "aqua" }}>
  <View
    style={{ backgroundColor: "blue", flexDirection: "column" }}
  >
    <Text>Rinaldi Pasya</Text>
    <Text>+62812345678</Text>
  </View>
</View> */
}
