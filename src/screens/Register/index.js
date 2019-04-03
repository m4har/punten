import React, { Component } from "react";
import { View } from "react-native";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { verticalScale } from "../../utility/Scale";

class Register extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
        <Input placeholder="Name" icon="account" />
        <Input placeholder="Phone" icon="phone" />
        <Input placeholder="Address" icon="home" />
        <View style={{ marginTop: verticalScale(50) }}>
          <Button
            title="register"
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </View>
      </View>
    );
  }
}
export default Register;
