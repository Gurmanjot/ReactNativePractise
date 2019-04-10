import React, { Component } from "react";
import { Text, View, TextInput, Button, FlatList, TouchableOpacity, Image, ScrollView } from "react-native";
import { Icon, Tab, Tabs, TabHeading } from "native-base";
import Tab2 from "./tab";

export default class MyHomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: "UI"
  };
  state = {
    val: ""
  };

  update = data => {
    this.setState({
      val: data
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 160,
            backgroundColor: "#2574ed"
          }}
        >
          <View style={{ flexDirection: "row", paddingTop: 40 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.toggleDrawer()}
              style={{ paddingTop: 7, marginLeft: 10 }}
            >
              <Icon name="menu" style={{ color: "white", fontSize: 25 }} />
            </TouchableOpacity>
            <View style={{ paddingLeft: 15 }}>
              <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Flipkart</Text>
              <Text style={{ fontSize: 13, color: "white" }}>
                Explore <Text style={{ color: "yellow", fontWeight: "600" }}>Plus+</Text>
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 150,
                marginTop: 10,
                justifyContent: "space-around",
                width: 80
              }}
            >
              <Icon name="notifications" style={{ color: "white", fontSize: 25 }} />
              <Icon name="cart" style={{ color: "white", fontSize: 25 }} />
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "white",
              flexDirection: "row",
              margin: 20,
              marginLeft: 10,
              marginRight: 10
            }}
          >
            <Icon name="search" style={{ color: "black", fontSize: 20, paddingLeft: 10, paddingRight: 10 }} />

            <TextInput
              value={this.state.val}
              placeholder="Search for Products,Brands and More"
              placeholderTextColor="black"
              onChangeText={this.update}
              style={{ height: 50 }}
            />
          </View>
        </View>

        <View style={{ backgroundColor: "white", flex: 1, alignItems: "center" }}>
          <Tabs tabContainerStyle={{ height: 70 }}>
            <Tab
              heading={
                <TabHeading>
                  <View style={{ alignItems: "center" }}>
                    <Image
                      source={{
                        uri:
                          "https://cdn.iconscout.com/icon/free/png-256/prize-award-reward-gift-surprize-ecommerce-festival-offer-tag-label-14-40334.png"
                      }}
                      style={{ width: 45, height: 45 }}
                    />
                    <Text style={{ fontSize: 12 }}>Offer Zone</Text>
                  </View>
                </TabHeading>
              }
            >
              <Tab2 />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <View style={{ alignItems: "center" }}>
                    <Image
                      source={{ uri: "https://image.flaticon.com/icons/png/512/54/54718.png" }}
                      style={{ width: 45, height: 45 }}
                    />
                    <Text style={{ fontSize: 12 }}>Mobiles</Text>
                  </View>
                </TabHeading>
              }
            >
              <Tab2 />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <View style={{ alignItems: "center" }}>
                    <Image
                      source={{ uri: "https://image.flaticon.com/icons/png/512/135/135763.png" }}
                      style={{ width: 45, height: 45 }}
                    />
                    <Text style={{ fontSize: 12 }}>Grocery</Text>
                  </View>
                </TabHeading>
              }
            >
              <Tab2 />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <View style={{ alignItems: "center" }}>
                    <Image
                      source={{
                        uri:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fyhR2cpTa9ARVa7UcwXtAWgMnqb9InBu_BH9NsVMKAJMH-U4"
                      }}
                      style={{ width: 45, height: 45 }}
                    />
                    <Text style={{ fontSize: 12 }}>Fashion</Text>
                  </View>
                </TabHeading>
              }
            >
              <Tab2 />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <View style={{ alignItems: "center" }}>
                    <Image
                      source={{ uri: "https://cdn0.iconfinder.com/data/icons/engineering-3/64/electronics-512.png" }}
                      style={{ width: 45, height: 45 }}
                    />
                    <Text style={{ fontSize: 11 }}>Electronics</Text>
                  </View>
                </TabHeading>
              }
            >
              <Tab2 />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <View style={{ alignItems: "center" }}>
                    <Image
                      source={{
                        uri: "https://cdn4.iconfinder.com/data/icons/furniture-solid/100/_-11-512.png"
                      }}
                      style={{ width: 45, height: 45 }}
                    />
                    <Text style={{ fontSize: 12 }}>Home</Text>
                  </View>
                </TabHeading>
              }
            >
              <Tab2 />
            </Tab>
          </Tabs>
        </View>
      </View>
    );
  }
}
