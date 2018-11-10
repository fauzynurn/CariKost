import React, { Component } from "react";
import Image from "react-native-remote-svg";
import { createStackNavigator } from "react-navigation";
import { Text, TextInput, View } from "react-native";
import { Button, Picker } from "native-base";
import SearchResult from "./Search_Result";
export class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  state = {
    selectedType: "Pria",
    selectedDuration: "Harian",
    selectedCapacity: "2"
  };
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
              height: "50%",
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
              height: 370,
              borderRadius: 14,
              backgroundColor: "#f7f7f7"
            }}
          >
            <View
              style={{
                width: "100%",
                height: 300,
                borderRadius: 10,
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
                Lokasi
              </Text>
              <TextInput
                style={{
                  marginLeft: 11,
                  height: 40,
                  backgroundColor: "white"
                }}
                placeholder="Lokasi"
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
                Harga
              </Text>
              <TextInput
                style={{
                  flexDirection: "column",
                  marginLeft: 11,
                  height: 40,
                  backgroundColor: "white"
                }}
                placeholder="Harga"
              />
              <View
                style={{ borderBottomColor: "#c6c6c6", borderBottomWidth: 1 }}
              />
              <View
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  justifyContent: "space-evenly",
                  flexDirection: "row"
                }}
              >
                <View style={{ width: "50%" }}>
                  <Text
                    style={{
                      color: "#c2c3c4",
                      fontWeight: "bold",
                      marginTop: 7,
                      marginLeft: 15,
                      fontSize: 15
                    }}
                  >
                    Durasi
                  </Text>
                  <Picker
                    selectedValue={this.state.selectedDuration}
                    note
                    mode="dropdown"
                    style={{ marginLeft: 10, width: "95%" }}
                    onValueChange={value =>
                      this.setState({ ...this.state, selectedDuration: value })
                    }
                  >
                    <Picker.Item label="Harian" value="Harian" />
                    <Picker.Item label="Mingguan" value="Mingguan" />
                    <Picker.Item label="Bulanan" value="Bulanan" />
                    <Picker.Item label="Tahunan" value="Tahunan" />
                  </Picker>
                </View>
                <View
                  style={{ borderLeftColor: "#c6c6c6", borderLeftWidth: 1 }}
                />
                <View style={{ width: "50%" }}>
                  <Text
                    style={{
                      color: "#c2c3c4",
                      fontWeight: "bold",
                      marginTop: 7,
                      marginLeft: 15,
                      fontSize: 15
                    }}
                  >
                    Tipe Kosan
                  </Text>
                  <Picker
                    selectedValue={this.state.selectedType}
                    note
                    mode="dropdown"
                    style={{ marginLeft: 10, width: "95%" }}
                    onValueChange={value =>
                      this.setState({ ...this.state, selectedType: value })
                    }
                  >
                    <Picker.Item label="Pria" value="Pria" />
                    <Picker.Item label="Wanita" value="Wanita" />
                    <Picker.Item label="Campur" value="Campur" />
                  </Picker>
                </View>
              </View>
              <View
                style={{ borderBottomColor: "#c6c6c6", borderBottomWidth: 1 }}
              />
              <View style={{ width: "100%" }}>
                <Text
                  style={{
                    color: "#c2c3c4",
                    fontWeight: "bold",
                    marginTop: 7,
                    marginLeft: 15,
                    fontSize: 15
                  }}
                >
                  Kapasitas
                </Text>
                <Picker
                  selectedValue={this.state.selectedCapacity}
                  note
                  mode="dropdown"
                  style={{ marginLeft: 10, width: "95%" }}
                  onValueChange={value =>
                    this.setState({ ...this.state, selectedCapacity: value })
                  }
                >
                  <Picker.Item label="2 Orang" value="2" />
                  <Picker.Item label="3 Orang" value="3" />
                  <Picker.Item label="4 Orang" value="4" />
                  <Picker.Item label="5 Orang" value="5" />
                  <Picker.Item label="6 Orang" value="6" />
                </Picker>
              </View>
            </View>
            <Button
              full
              onPress={() => this.props.navigation.navigate("SearchResult")}
              style={{
                margin: 15,
                bottom: 0,
                backgroundColor: "#ff9523"
              }}
            >
              <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 20 }}
              >
                Cari
              </Text>
            </Button>
          </View>
          <Button
            style={{
              marginTop: 40,
              padding: 25,
              borderColor: "orange",
              borderWidth: 50,
              alignSelf: "center"
            }}
            bordered
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <Image
                style={{ marginRight: 10, width: 20, height: 20 }}
                source={require("../Assets/Marker_Button.svg")}
              />
              <Text
                style={{
                  color: "orange",
                  fontWeight: "bold"
                }}
              >
                Cari Kosan Terdekat
              </Text>
            </View>
          </Button>
        </View>
      </React.Fragment>
    );
  }
}

export const homeStackNav = createStackNavigator(
  {
    Home,
    SearchResult
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
