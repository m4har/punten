import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { connect } from "react-redux";

// COMPONENT
import { moderateScale } from "../../utility/Scale";
import Header from "./component/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
// ACTION
import { postLoginAction } from "../../redux/actions/Login";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  static navigationOptions = {
    header: null
  };

  ActionLogin() {
    this.props.postLoginAction({
      data: this.state,
      navigation: this.props.navigation
    });
  }
  testError() {
    if (this.props.LoginProps.error !== "") {
      return console.log("ereeeerrr");
    }
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {this.testError()}
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
            <Button title="login/regiser" onPress={() => this.ActionLogin()} />
          </View>
          <View
            style={{
              marginTop: moderateScale(10)
            }}
          >
            <Button
              title="Login With Phone"
              onPress={() => this.props.navigation.navigate("Phone")}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const MapStateToProps = state => ({
  LoginProps: state.Login
});
mapDispatchToProps = dispatch => {
  return {
    postLoginAction: data => {
      dispatch(postLoginAction(data));
    }
  };
};

export default connect(
  MapStateToProps,
  mapDispatchToProps
)(Login);
