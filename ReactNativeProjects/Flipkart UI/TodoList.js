import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button, Switch, FlatList } from "react-native";

class Todo extends Component {
  render() {
    const { currentEditId, id } = this.props;
    return (
      <View>
        {currentEditId === id ? (
          <View style={styles.TodoContainer}>
            <TextInput
              style={styles.editedText}
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
    editText: "",
    filter: "ALL"
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

  done = () => {
    this.setState({
      todoCollection: this.state.todoCollection.map(todo => {
        return {
          key: todo.key,
          checked: true,
          val: todo.val
        };
      })
    });
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

  renderTodos = obj => {
    return (
      <Todo
        val={obj.item.val}
        key={obj.item.key}
        id={obj.item.key}
        currentEditId={this.state.currentEditId}
        onDel={() => this.remove(obj.item.key)}
        checked={obj.item.checked}
        toggleChecked={() => this.toggleChecked(obj.item.key)}
        onEdit={() => this.setState({ currentEditId: obj.item.key, editText: obj.item.val })}
        onSaveEdit={() => this.edit(obj.item.key)}
        onEditTextChange={value => {
          this.setState({ editText: value });
        }}
        editText={this.state.editText}
      />
    );
  };

  renderHeader = () => {
    return (
      <View>
        <Text>Start of List</Text>
      </View>
    );
  };

  renderFooter = () => {
    return (
      <View>
        <Text>End of List</Text>
      </View>
    );
  };

  getData = () => {
    switch (this.state.filter) {
      case "ALL":
        return this.state.todoCollection;

      case "COMPLETE":
        return this.state.todoCollection.filter(todo => todo.checked);

      case "PENDING":
        return this.state.todoCollection.filter(todo => !todo.checked);

      default:
        return this.state.todoCollection;
    }
  };
  render() {
    return (
      <View style={{ padding: 40, flex: 1 }}>
        <View style={styles.filters}>
          <Button
            onPress={() => {
              this.setState({
                filter: "ALL"
              });
            }}
            title="All"
            style={styles.ButtonAll}
          />
          <Button
            onPress={() => {
              this.setState({
                filter: "COMPLETE"
              });
            }}
            title="Completed"
          />
          <Button
            onPress={() => {
              this.setState({
                filter: "PENDING"
              });
            }}
            title="Pending"
          />
        </View>

        <TextInput
          style={styles.inputValue}
          placeholder="What to do next ??"
          onChangeText={text => this.setState({ val: text })}
          value={this.state.val}
        />

        <Button onPress={() => this.add()} title="AddItem" />

        <Button onPress={() => this.clearArray()} title="ClearAll" />

        <Button onPress={() => this.done()} title="DoneAll" />

        <FlatList
          data={this.getData()}
          renderItem={this.renderTodos}
          ListHeaderComponent={() => this.renderHeader()}
          ListFooterComponent={() => this.renderFooter()}
          keyExtractor={item => item.key.toString()}
        />

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
  TodoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  footer: {
    alignItems: "center",
    justifyContent: "flex-end"
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  ButtonAll: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4
  },
  editedText: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    flex: 1,
    paddingHorizontal: 10
  },
  inputValue: {
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10
  }
});
