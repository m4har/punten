import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { connect } from "react-redux";

// COMPONENT
import { moderateScale } from "../../utility/Scale";
import Header from "./component/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
// ACTION
import { PostLogin } from "../../redux/actions/Login";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  static navigationOptions = {
    header: null
  };

  async ActionLogin() {
    await this.props.onPostLogin({ data: this.state });
    this.props.navigation.navigate("Register");
  }
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
            <Button title="login/regiser" onPress={() => this.ActionLogin()} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
mapDispatchToProps = dispatch => {
  return {
    onPostLogin: data => {
      dispatch(PostLogin(data));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
