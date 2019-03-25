/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button, Switch, ScrollView } from "react-native";

class Todo extends Component {
  render() {
    const { currentEditId, id } = this.props;
    return (
      <View>
        {currentEditId === id ? (
          <View style={styles.TodoContainer}>
            <TextInput
              style={{ borderColor: "black", borderWidth: 1, borderRadius: 4, flex: 1, paddingHorizontal: 10 }}
              value={this.props.editText}
              onChangeText={this.props.onEditTextChange}
            />
            <Button title="Save" onPress={this.props.onSaveEdit} />
          </View>
        ) : (
          <View style={styles.TodoContainer}>
            <Switch value={this.props.checked} onValueChange={this.props.toggleChecked} />
            <Text>{this.props.val}</Text>
            <Button title="Delete" onPress={this.props.onDel} />
            <Button title="Edit" onPress={this.props.onEdit} />
          </View>
        )}
      </View>
    );
  }
}

let i = 0;

export default class first extends Component {
  state = {
    val: "",
    todoCollection: [],
    currentEditId: undefined,
    editText: ""
  };

  clearArray = () => {
    this.setState({
      todoCollection: []
    });
  };

  add = () => {
    if (this.state.val && this.state.val !== "") {
      this.setState({
        todoCollection: [...this.state.todoCollection, { val: this.state.val, key: i++, checked: false }],
        val: ""
      });
    }
  };

  remove = key => {
    this.setState({
      todoCollection: this.state.todoCollection.filter(todo => todo.key !== key)
    });
  };

  edit = key => {
    this.setState({
      todoCollection: this.state.todoCollection.map(todo => {
        if (todo.key !== key) return todo;
        else {
          return {
            key: todo.key,
            val: this.state.editText,
            checked: todo.checked
          };
        }
      }),
      editText: "",
      currentEditId: undefined
    });
  };

  toggleChecked = key => {
    this.setState({
      todoCollection: this.state.todoCollection.map(todo => {
        if (todo.key !== key) return todo;
        else {
          return {
            key: todo.key,
            val: todo.val,
            checked: !todo.checked
          };
        }
      })
    });
  };
  render() {
    return (
      <View style={{ padding: 40, flex: 1 }}>
        <TextInput
          style={{ height: 100 }}
          placeholder="What to do next ??"
          onChangeText={text => this.setState({ val: text })}
          value={this.state.val}
        />

        <Button onPress={this.add} title="AddItem" />

        <Button onPress={this.clearArray} title="ClearAll" />

        <ScrollView style={{ paddingBottom: 10 }}>
          {this.state.todoCollection.map(item => (
            <Todo
              val={item.val}
              key={item.key}
              id={item.key}
              currentEditId={this.state.currentEditId}
              onDel={() => this.remove(item.key)}
              checked={item.checked}
              toggleChecked={() => this.toggleChecked(item.key)}
              onEdit={() => this.setState({ currentEditId: item.key, editText: item.val })}
              onSaveEdit={() => this.edit(item.key)}
              onEditTextChange={value => {
                this.setState({ editText: value });
              }}
              editText={this.state.editText}
            />
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <Text>Completed tasks = {this.state.todoCollection.filter(todo => todo.checked).length}</Text>
          <Text>Pending tasks = {this.state.todoCollection.filter(todo => !todo.checked).length}</Text>
        </View>
      </View>
    );
  }
}

// style property

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 100,
    width: 200
  },
  TodoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  footer: {
    alignItems: "center",
    justifyContent: "flex-end"
  }
});
