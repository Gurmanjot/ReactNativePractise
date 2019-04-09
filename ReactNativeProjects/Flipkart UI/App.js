/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import MyHomeScreen from "./FlipkartUi";
import List from "./TodoList";

const MyDrawerNavigator = createDrawerNavigator({
  Home: MyHomeScreen,
  TodoList: List
});

const MyApp = createAppContainer(MyDrawerNavigator);

class Header extends Component {
  render() {
    return <MyApp />;
  }
}

export default Header;
