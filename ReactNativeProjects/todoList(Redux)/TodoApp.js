import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import AddTodo from "./containers/AddTodo";
import VisibleTodos from "./containers/VisibleTodos";
import Footer from "./components/Footer";

class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
        <VisibleTodos />
        <Footer />
      </View>
    );
  }
}
export default TodoApp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 80,
    backgroundColor: "yellow"
  }
});
