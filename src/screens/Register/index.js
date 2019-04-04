import React, { Component } from "react";
import { View } from "react-native";

import { connect } from "react-redux";
import { PostRegister } from "../../redux/actions/Register";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { verticalScale } from "../../utility/Scale";

class Register extends Component {
  state = {
    name: "",
    phone: "",
    address: "",
    token: ""
  };
  async componentDidMount() {
    await this.setState({ token: this.props.Login.data.token });
  }
  async ActionRegister() {
    await this.props.dispatch(PostRegister({ data: this.state }));
    this.props.navigation.navigate("Home");
  }
  render() {
    return (
      <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
        <Input
          placeholder="Name"
          icon="account"
          onChangeText={name => this.setState({ name })}
        />
        <Input
          placeholder="Phone"
          icon="phone"
          onChangeText={phone => this.setState({ phone })}
        />
        <Input
          placeholder="Address"
          icon="home"
          onChangeText={address => this.setState({ address })}
        />
        <View style={{ marginTop: verticalScale(50) }}>
          <Button title="register" onPress={() => this.ActionRegister()} />
        </View>
      </View>
    );
  }
}
const MapStateToProps = state => ({
  Login: state.Login
});

export default connect(MapStateToProps)(Register);
