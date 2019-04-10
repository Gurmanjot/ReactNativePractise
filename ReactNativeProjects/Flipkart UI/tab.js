import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Tab, Tabs, Footer, FooterTab, Button } from "native-base";

export default class Test extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
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
        {/* // next component */}
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
        <View>
          <Footer>
            <FooterTab>
              <Button>
                <Text>Shop</Text>
              </Button>
              <Button>
                <Text>Sales</Text>
              </Button>
              <Button>
                <Text>Clothes</Text>
              </Button>
              <Button>
                <Text>Exclusives</Text>
              </Button>
            </FooterTab>
          </Footer>
        </View>
      </View>
    );
  }
}
