import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../actions";
class AddTodo extends Component {
  state = {
    text: ""
  };
  addT = text => {
    this.props.dispatch(addTodo(text));
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <View style={styles.cont}>
        <TextInput
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder="What to do next.. ?? "
          style={{ borderWidth: 1, borderColor: "black", backgroundColor: "green", height: 50, flex: 1, padding: 5 }}
        />
        <View style={{ height: 50, backgroundColor: "yellow", alignItems: "center", justifyContent: "center" }}>
          <Button title="ADD" onPress={() => this.addT(this.state.text)} />
        </View>
      </View>
    );
  }
}

export default connect()(AddTodo);
// export default AddTodo;
const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    marginHorizontal: 20
  }
});
