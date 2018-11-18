import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import Image from "react-native-remote-svg";
import { RNChipView } from "react-native-chip-view";
import SearchResultItem from "../components/search_result_item";
import { Button } from "native-base";

class SearchResult extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  state = {
    imagesRepo: [],
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  };
  componentDidMount() {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=c6c70e2721dc619d0bb16869cbf4c7e594b90a4b9aed4c6caf64a8cf0bb3e3d1&count=6"
    )
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({ imagesRepo: responseJSON }, () =>
          console.log(this.state.imagesRepo)
        );
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={{ paddingBottom: this.state.height * 0.17 }}>
        <View
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "column",
            backgroundColor: "#ff9523"
          }}
        >
          <View style={{ flex: 0, flexDirection: "row", padding: 15 }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
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
              Search Result
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              width: "100%",
              backgroundColor: "white",
              height: 150
            }}
          >
            <View
              style={{
                width: "100%",
                height: this.state.height * 0.05,
                backgroundColor: "#ff9523"
              }}
            />
            <View
              style={{
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: this.state.height * 0.1
              }}
            >
              <View
                style={{
                  width: "90%"
                }}
              >
                <View
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: 4,
                    elevation: 1.2,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row"
                  }}
                >
                  <TextInput
                    placeholder="Search"
                    style={{
                      width: "80%",
                      height: this.state.height * 0.08,
                      borderRadius: 4
                    }}
                  />
                  <Image
                    style={{ width: 25, height: 25 }}
                    source={require("../Assets/Navbar-Search-OnClick.svg")}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: this.state.height * 0.05
              }}
            >
              <ScrollView
                style={{ marginTop: 2, height: 40 }}
                horizontal={true}
                contentOffset={{ x: 20, y: 0 }}
                showsHorizontalScrollIndicator={false}
              >
                <View style={{ marginLeft: 15, marginRight: 6 }}>
                  <RNChipView
                    backgroundColor="#ff9523"
                    title={"Rp. 300.000"}
                    theme={1}
                    height={this.state.height * 0.05}
                    avatar={false}
                    titleStyle={{
                      fontSize: 14,
                      fontWeight: "normal",
                      paddingLeft: 4,
                      color: "white"
                    }}
                    cancelable={true}
                  />
                </View>
                <View style={{ marginRight: 6 }}>
                  <RNChipView
                    backgroundColor="#ff9523"
                    title={"Harian"}
                    height={this.state.height * 0.05}
                    avatar={false}
                    titleStyle={{
                      fontSize: 14,
                      fontWeight: "normal",
                      paddingLeft: 10,
                      color: "white"
                    }}
                    cancelable={true}
                  />
                </View>
                <View style={{ marginRight: 10 }}>
                  <RNChipView
                    backgroundColor="#ff9523"
                    title={"Campur"}
                    height={this.state.height * 0.05}
                    avatar={false}
                    titleStyle={{
                      fontSize: 14,
                      fontWeight: "normal",
                      paddingLeft: 10,
                      color: "white"
                    }}
                    cancelable={true}
                  />
                </View>
                <View style={{ marginRight: 10 }}>
                  <RNChipView
                    backgroum
                    ndColor="#ff9523"
                    title={"Pria"}
                    height={this.state.height * 0.05}
                    avatar={false}
                    titleStyle={{
                      fontSize: 14,
                      fontWeight: "normal",
                      paddingLeft: 10,
                      color: "white"
                    }}
                    cancelable={true}
                  />
                </View>
                <View style={{ marginRight: 10 }}>
                  <RNChipView
                    backgroundColor="#ff9523"
                    title={"Bandung"}
                    height={this.state.height * 0.05}
                    avatar={false}
                    titleStyle={{
                      fontSize: 14,
                      fontWeight: "normal",
                      paddingLeft: 10,
                      color: "white"
                    }}
                    cancelable={true}
                  />
                </View>
              </ScrollView>
            </View>
            <View>
              {this.state.imagesRepo.length === 0 ? (
                <Text>Please wait</Text>
              ) : (
                <View style={{ alignSelf: "center" }}>
                  <ScrollView
                    style={{ marginTop: 2, height: 40 }}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                  >
                    <View>
                      <FlatList
                        scrollEnabled={false}
                        style={{
                          alignSelf: "center",
                          marginTop: this.state.height * 0.01,
                          width: "100%"
                        }}
                        data={this.state.imagesRepo}
                        numColumns={2}
                        renderItem={({ item, index }) => (
                          <SearchResultItem
                            onPress={() => console.log("Item PRESSED")}
                            marginLeft={index % 2 !== 0 ? 7 : 0}
                            marginBottom={7}
                            imageUri={item.urls.regular}
                          />
                        )}
                      />
                      <View backgroundColor="blue" flexDirection="row">
                        <Button
                          onPress={() => console.log("Google clicked!!")}
                          style={{ borderRadius: 9, padding: 20 }}
                          success
                        >
                          <Text>1</Text>
                        </Button>
                        <Button
                          onPress={() => console.log("Google clicked!!")}
                          style={{ borderRadius: 9, padding: 30 }}
                          success
                        >
                          <Text>Next</Text>
                        </Button>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default SearchResult;
