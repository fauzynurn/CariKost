import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import Image from "react-native-remote-svg";

class SearchResultItem extends Component {
  state = {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  };
  render() {
    return (
      <View
        style={{
          elevation: 2,
          backgroundColor: "white",
          marginLeft: this.props.marginLeft,
          marginBottom: this.props.marginBottom,
          width: this.state.width * 0.45,
          height: this.state.height * 0.32
        }}
      >
        <Image
          style={{ width: "100%", height: this.state.height * 0.17 }}
          source={{ uri: this.props.imageUri }}
        />
        <View
          style={{
            width: "100%",
            height: this.state.height * 0.17,
            position: "absolute",
            flexDirection: "column"
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{
                marginLeft: 5,
                width: this.state.width * 0.05,
                height: this.state.height * 0.05
              }}
              source={require("../Assets/Card-Rating-Icon.svg")}
            />
            <Text
              style={{
                marginLeft: 11,
                marginTop: 9,
                fontWeight: "bold",
                color: "white",
                fontSize: 13
              }}
            >
              4.5/5
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 21,
              left: 0,
              backgroundColor: "red",
              justifyContent: "center",
              width: this.state.width * 0.19,
              height: this.state.height * 0.035
            }}
          >
            <Text
              style={{
                fontSize: 13,
                color: "white",
                fontWeight: "bold",
                alignSelf: "center"
              }}
            >
              Campuran
            </Text>
          </View>
        </View>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 8,
            fontSize: 18,
            fontWeight: "bold"
          }}
        >
          Kosan Wik Wik
        </Text>
        <Text
          style={{
            width: "85%",
            marginLeft: 10,
            fontSize: 10,
            color: "#c4c4c4"
          }}
        >
          Jl. Soekarno Hatta No. 123, Bandung
        </Text>
        <View
          style={{
            position: "absolute",
            bottom: 15,
            right: 0,
            backgroundColor: "grey",
            justifyContent: "center",
            width: this.state.width * 0.22,
            height: this.state.height * 0.035
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              textAlign: "center",
              color: "white",
              width: "100%",
              fontSize: 13,
              fontWeight: "bold"
            }}
          >
            Sisa 2 Kamar
          </Text>
        </View>
      </View>
    );
  }
}

export default SearchResultItem;
