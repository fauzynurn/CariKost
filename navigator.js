import React, { Component } from "react";
import Cart from "./screens/Cart";
import Home, { homeStackNav } from "./screens/Home";
import { createBottomTabNavigator } from "react-navigation";
import Account from "./screens/Account";
import Image from "react-native-remote-svg";

export const Tabs = createBottomTabNavigator(
  {
    Search: {
      screen: homeStackNav,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const image = focused
            ? require("./Assets/Navbar-Search-OnClick.svg")
            : require("./Assets/Navbar-Search.svg");
          return <Image style={{ width: 25, height: 25 }} source={image} />;
        }
      }
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const image = focused
            ? require("./Assets/Navbar-Cart-Onclick.svg")
            : require("./Assets/Navbar-Cart.svg");
          return <Image style={{ width: 25, height: 25 }} source={image} />;
        }
      }
    },
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const image = focused
            ? require("./Assets/Navbar-Account-OnClick.svg")
            : require("./Assets/Navbar-Account.svg");
          return <Image style={{ width: 25, height: 25 }} source={image} />;
        }
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: { height: 50 }
    }
  }
);
