/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { Text, Button } from "react-native";
import firebase from "firebase";
import { Container, Form, Input, Item, Label } from "native-base";

// email authentication

export default class App extends Component {
  state = {
    Email: "",
    Password: ""
  };
  login = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
      });
  };
  signup = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password);
  };
  render() {
    return (
      <Container style={{ flex: 1, justifyContent: "center", padding: 10 }}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input autoCorrect={false} autoCapitalize="none" onChangeText={Email => this.setState({ Email })} />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={Password => this.setState({ Password })}
            />
          </Item>
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => this.login(this.state.Email, this.state.Password)}
          >
            <Text>Login</Text>
          </Button>
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.signup(this.state.Email, this.state.Password)}
          >
            <Text>Signup</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
