import React from "react";
import { connect } from "react-redux";

class Auth extends React.Component {
  render() {
    if (this.props.Register.data === "") {
      return this.props.navigation.navigate("Login");
    } else {
      return this.props.navigation.navigate("Home");
    }
  }
}
const MapStateToProps = state => ({
  Register: state.Register
});

export default connect(MapStateToProps)(Auth);
