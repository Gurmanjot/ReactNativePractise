import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import store from "../store/index";
import { connect } from "react-redux";
import { changeVisibility } from "../actions/index";

class Footer extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          // alignItems: "center ",
          position: "absolute",
          bottom: 20,
          flex: 1,
          padding: 20,
          backgroundColor: "white",
          width: 380
        }}
      >
        <Button title="All" onPress={this.props.all} />
        <Button title="Completed" onPress={this.props.complete} />
        <Button title="Pending" onPress={this.props.pending} />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  all: () => dispatch(changeVisibility("ALL")),
  pending: () => dispatch(changeVisibility("PENDING")),
  complete: () => dispatch(changeVisibility("COMPLETED"))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
// export default Footer;
