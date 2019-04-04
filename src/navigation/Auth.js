import React from "react";
import { connect } from "react-redux";

import DashboardStack from "./DashboardStack";
import AuthStack from "./AuthStack";

// const Auth = ({ Register, navigation } = this.props) => {
//   if (Register.data === "") {
//     return navigation.navigate("Login");
//   } else {
//     return navigation.navigate("Home");
//   }
// };

class Auth extends React.Component {
  render() {
    if (this.props.Register.data === "") {
      return this.props.navigation.push("Login");
    } else {
      return this.props.navigation.navigate("Home");
    }
  }
}
const MapStateToProps = state => ({
  Register: state.Register
});

export default connect(MapStateToProps)(Auth);
