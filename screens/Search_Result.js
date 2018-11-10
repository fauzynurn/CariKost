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

class SearchResult extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  state = {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  };
  render() {
    return (
      <React.Fragment>
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
                marginLeft: 15,
                marginRight: 15,
                marginTop: this.state.height * 0.05
              }}
            >
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <RNChipView
                  backgroundColor="#ff9523"
                  title={"Pria"}
                  height={this.state.height * 0.05}
                  avatar={false}
                  titleStyle={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    color: "white"
                  }}
                  cancelable={true}
                />
                <RNChipView
                  backgroundColor="#ff9523"
                  title={"Pria"}
                  height={this.state.height * 0.05}
                  avatar={false}
                  titleStyle={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    color: "white"
                  }}
                  cancelable={true}
                />
                <RNChipView
                  backgroundColor="#ff9523"
                  title={"Pria"}
                  height={this.state.height * 0.05}
                  avatar={false}
                  titleStyle={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    color: "white"
                  }}
                  cancelable={true}
                />
                <RNChipView
                  backgroundColor="#ff9523"
                  title={"Pria"}
                  height={this.state.height * 0.05}
                  avatar={false}
                  titleStyle={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    color: "white"
                  }}
                  cancelable={true}
                />
                <RNChipView
                  backgroundColor="#ff9523"
                  title={"Pria"}
                  height={this.state.height * 0.05}
                  avatar={false}
                  titleStyle={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    color: "white"
                  }}
                  cancelable={true}
                />
              </ScrollView>
              <FlatList
                style={{ width: "100%" }}
                data={[
                  { key: "satu" },
                  { key: "dua" },
                  { key: "tiga" },
                  { key: "empat" },
                  { key: "tiga" },
                  { key: "tiga" },
                  { key: "tiga" },
                  { key: "tiga" },
                  { key: "tiga" },
                  { key: "tiga" },
                  { key: "tiga" },
                  { key: "tiga" }
                ]}
                numColumns={2}
                renderItem={item => <SearchResultItem teks={item.key} />}
              />
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default SearchResult;
