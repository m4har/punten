import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";

class Auth extends React.Component {
  componentDidMount() {
    console.log(this.props);
    if (this.props.Register.data === "") {
      return this.props.navigation.navigate("Login");
    } else {
      return this.props.navigation.navigate("Home");
    }
  }
  render() {
    return <View />;
  }
}
const MapStateToProps = state => ({
  Register: state.Register
});

export default connect(MapStateToProps)(Auth);
