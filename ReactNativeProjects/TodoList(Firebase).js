/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { Text, View, FlatList, Button, TextInput } from "react-native";
import { db } from "./config.js";

let arr;
export default class App extends Component {
  state = {
    todoCollection: [],
    val: ""
  };

  delete = ({ item }) => {
    return db.child(item.id).remove();
  };

  update = ({ item }) => {
    db.child(item.id).update({
      visible: "haiya"
    });
  };
  add = text => {
    db.push({
      todoItem: {
        text: text,
        completed: false
      },
      visible: "ALL"
    });
    this.setState({
      val: ""
    });
  };

  fun = () => {
    db.on("value", snapshot => {
      arr = snapshot.toJSON();
      arr = Object.keys(arr).map(todo => ({
        id: todo,
        completed: arr[todo]["todoItem"]["completed"],
        text: arr[todo]["todoItem"]["text"]
      }));

      this.setState({
        todoCollection: arr
      });
    });
  };

  render() {
    return (
      <View style={{ padding: 50, flex: 1 }}>
        <TextInput
          onChangeText={val => this.setState({ val })}
          value={this.state.val}
          placeholder="What to do next.. ?? "
          style={{ borderWidth: 1, borderColor: "black", backgroundColor: "green", height: 50, padding: 5 }}
        />
        <Button title="ADD" onPress={() => this.add(this.state.val)} />
        <Button onPress={() => this.fun()} title="Push" />

        <FlatList
          keyExtractor={(x, i) => i}
          data={this.state.todoCollection}
          renderItem={({ item }) => {
            return (
              <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text>{item.text}</Text>
                <Button onPress={() => this.delete({ item })} title="delete" />
                <Button onPress={() => this.update({ item })} title="Update" />
              </View>
            );
          }}
        />
      </View>
    );
  }
}
