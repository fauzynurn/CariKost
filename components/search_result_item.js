import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";

class SearchResultItem extends Component {
  state = {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: "pink",
          elevation: 4,
          width: this.state.width * 0.5,
          height: this.state.height * 0.2
        }}
      >
        <Text>{this.props.teks}</Text>
      </View>
    );
  }
}

export default SearchResultItem;
