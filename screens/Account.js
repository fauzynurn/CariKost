import React, { Component } from "react";
import {
  Text,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Image from "react-native-remote-svg";
class Account extends Component {
  state = {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  };
  render() {
    return (
      <ScrollView>
        <View style={{ paddingBottom: this.state.height * 0.17 }}>
          <View
            style={{
              width: "100%",
              height: this.state.height * 0.08,
              flexDirection: "column",
              backgroundColor: "#ff9523"
            }}
          >
            <View style={{ flex: 0, flexDirection: "row", padding: 15 }}>
              <Text
                style={{
                  fontSize: 19,
                  marginLeft: 15,
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                Akun
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "95%",
              alignSelf: "center",
              justifyContent: "center",
              height: this.state.height * 0.25
            }}
          >
            <View>
              <Text
                onPress={() => console.log("Logout clicked!!")}
                style={{
                  fontSize: 16,
                  right: 0,
                  position: "absolute",
                  color: "red"
                }}
              >
                Logout
              </Text>
            </View>
            <View style={{ position: "absolute", bottom: 0, right: 0 }}>
              <Image
                source={require("../Assets/settings.png")}
                style={{
                  marginBottom: 10,
                  width: 30,
                  height: 30
                }}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <TouchableOpacity onPress={() => console.log("user clicked!!")}>
                <Image
                  source={require("../Assets/user.png")}
                  style={{ width: 80, height: 80 }}
                />
              </TouchableOpacity>
              <Text style={{ marginTop: 10 }}>Rinaldi Pasya</Text>
              <Text>+62812345679</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "#c6c6c6",
              borderBottomWidth: 1
            }}
          />
          <View
            style={{
              width: "100%",
              borderBottomColor: "#c6c6c6",
              borderBottomWidth: 1,
              alignItems: "center",
              justifyContent: "center",
              height: this.state.height * 0.05
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Kosan anda saat ini</Text>
          </View>
          <View
            style={{
              marginTop: 13,
              width: "90%",
              alignSelf: "center",
              height: this.state.height * 0.38
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                height: 60
              }}
            >
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: 21, fontWeight: "bold" }}>
                  Kosan Abah
                </Text>
                <Text
                  style={{ fontSize: 18, color: "grey", fontWeight: "bold" }}
                >
                  Kamar 1
                </Text>
              </View>
              <View style={{ position: "absolute", right: 0 }}>
                <Text style={{ fontSize: 15, color: "grey" }}>
                  12 September 2018
                </Text>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 15 }}>
                <Text style={{ color: "orange" }}>Rp. 100.000</Text>
                <Text style={{ color: "grey" }}> / malam</Text>
              </Text>
            </View>
            <View style={{ justifyContent: "center" }}>
              <Image
                source={require("../Assets/Maps-Background-Bottom-image.png")}
                style={{
                  marginTop: 15,
                  width: "100%",
                  height: this.state.height * 0.15
                }}
              />
              <Image
                source={require("../Assets/Maps-Marker.svg")}
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  width: 30,
                  height: 20
                }}
              />
            </View>
            <View>
              <Text style={{ marginTop: 10, color: "grey" }}>
                Jl. Ciwaruga no. 12, Bandung Utara
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "#c6c6c6",
              borderBottomWidth: 1
            }}
          />
          <View
            style={{
              marginTop: 15,
              alignSelf: "center",
              width: "90%",
              height: 120
            }}
          >
            <Text style={{ fontSize: 21, fontWeight: "bold" }}>Agen</Text>
            <View
              style={{
                marginTop: 10,
                width: "100%",
                flexDirection: "row",
                height: this.state.height * 0.07
              }}
            >
              <Image
                source={require("../Assets/user.png")}
                style={{
                  width: this.state.height * 0.07,
                  height: this.state.height * 0.07
                }}
              />
              <View
                style={{
                  marginLeft: 20,
                  width: "80%",
                  height: "100%"
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Wildan Muhammad Aqso
                </Text>
                <Text style={{ marginTop: 3, fontSize: 13, color: "grey" }}>
                  +628123456789
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "#c6c6c6",
              borderBottomWidth: 1
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Account;
