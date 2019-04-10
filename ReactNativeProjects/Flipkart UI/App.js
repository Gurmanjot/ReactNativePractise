/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createAppContainer, createDrawerNavigator, createSwitchNavigator } from "react-navigation";
import { Text } from "react-native";
import MyHomeScreen from "./FlipkartUi";
import List from "./TodoList";
const MyDrawerNavigator = createDrawerNavigator({
  Homeaa: MyHomeScreen,
  TodoList: List
});

const MyApp = createAppContainer(MyDrawerNavigator);

class Header extends Component {
  render() {
    return <MyApp />;
  }
}

export default Header;
