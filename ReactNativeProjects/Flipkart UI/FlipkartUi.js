import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button, FlatList, TouchableOpacity, Image, ScrollView } from "react-native";
import { Icon } from "native-base";

export default class MyHomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
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
            <View style={{ flexDirection: "column", paddingLeft: 15 }}>
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
          {/* Quick links */}
          <View
            style={{
              height: 60,
              backgroundColor: "white",
              alignSelf: "stretch",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 5
            }}
          >
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Image
                source={{
                  uri:
                    "https://cdn.iconscout.com/icon/free/png-256/prize-award-reward-gift-surprize-ecommerce-festival-offer-tag-label-14-40334.png"
                }}
                style={{ width: 45, height: 45 }}
              />
              <Text style={{ fontSize: 12 }}>Offer Zone</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Image
                source={{ uri: "https://image.flaticon.com/icons/png/512/135/135763.png" }}
                style={{ width: 45, height: 45 }}
              />
              <Text style={{ fontSize: 12 }}>Grocery</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Image
                source={{ uri: "https://image.flaticon.com/icons/png/512/54/54718.png" }}
                style={{ width: 45, height: 45 }}
              />
              <Text style={{ fontSize: 12 }}>Mobiles</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Image
                source={{
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fyhR2cpTa9ARVa7UcwXtAWgMnqb9InBu_BH9NsVMKAJMH-U4"
                }}
                style={{ width: 45, height: 45 }}
              />
              <Text style={{ fontSize: 12 }}>Fashion</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Image
                source={{ uri: "https://cdn0.iconfinder.com/data/icons/engineering-3/64/electronics-512.png" }}
                style={{ width: 45, height: 45 }}
              />
              <Text style={{ fontSize: 12 }}>Electronics</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Image
                source={{
                  uri: "https://cdn4.iconfinder.com/data/icons/furniture-solid/100/_-11-512.png"
                }}
                style={{ width: 45, height: 45 }}
              />
              <Text style={{ fontSize: 12 }}>Home</Text>
            </View>
          </View>
          {/* scroll list  */}
          <View style={{ backgroundColor: "#f2f2f2", height: 200 }}>
            <ScrollView horizontal style={{}}>
              <Image
                style={{ margin: 10 }}
                source={{
                  uri: "https://s3.envato.com/files/184487548/1200x1200%207.jpg",
                  width: 230,
                  height: 180
                }}
              />
              <Image
                style={{ margin: 10 }}
                source={{
                  uri: "https://images.indianexpress.com/2019/02/5_759.jpg",
                  width: 230,
                  height: 180
                }}
              />
              <Image
                style={{ margin: 10 }}
                source={{
                  uri: "https://s3.envato.com/files/216320406/BEE-1797-Fashion%20Sale%20Banners_01_Preview3.jpg",
                  width: 230,
                  height: 180
                }}
              />
            </ScrollView>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ margin: 10 }}
              source={{
                uri: "https://rukminim1.flixcart.com/flap/1400/1400/image/81dc7625c01d0403.jpg?q=50",
                width: 170,
                height: 170
              }}
            />
            <Image
              style={{ margin: 10 }}
              source={{
                uri:
                  "https://www.shopickr.com/wp-content/uploads/2016/05/flipkart-home-appliances-electronics-sale-may-2016.jpg",
                width: 170,
                height: 170
              }}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text>coming soon...</Text>
          </View>
        </View>
      </View>
    );
  }
}
