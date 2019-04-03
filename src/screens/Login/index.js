import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";

import { moderateScale } from "../../utility/Scale";
import Header from "./component/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

class Login extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
          <Header />
          <Input icon="email" placeholder="user@email.id" />
          <Input icon="lock" placeholder="password" secureTextEntry />
          <View style={{ marginTop: moderateScale(10) }}>
            <Button title="login/regiser" />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;
