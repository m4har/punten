import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";

import { moderateScale } from "../../utility/Scale";
import Header from "./component/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
          <Header />
          <Input
            icon="email"
            placeholder="user@email.id"
            onChangeText={email => this.setState({ email })}
          />
          <Input
            icon="lock"
            placeholder="password"
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
          <View style={{ marginTop: moderateScale(10) }}>
            <Button
              title="login/regiser"
              onPress={() => this.props.navigation.navigate("Register")}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;
