import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  if (todos.visible == "ALL") {
    return (
      <View style={{ padding: 20 }}>
        {todos.todoCollection.map(todo => (
          <View key={todo.id} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
              <Text
                style={{
                  fontSize: 24,
                  textDecorationLine: todo.completed ? "line-through" : "none"
                }}
              >
                {todo.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  } else if (todos.visible == "PENDING") {
    return (
      <View style={{ padding: 20 }}>
        {todos.todoCollection
          .filter(todo => !todo.completed)
          .map(todo => (
            <View key={todo.id} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                <Text
                  style={{
                    fontSize: 24,
                    textDecorationLine: todo.completed ? "line-through" : "none"
                  }}
                >
                  {todo.text}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    );
  } else {
    return (
      <View style={{ padding: 20 }}>
        {todos.todoCollection
          .filter(todo => todo.completed)
          .map(todo => (
            <View key={todo.id} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                <Text
                  style={{
                    fontSize: 24
                    // textDecorationLine: todo.completed ? "line-through" : "none"
                  }}
                >
                  {todo.text}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    );
  }
};

export default TodoList;
