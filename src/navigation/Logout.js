import React from "react";
import { AsyncStorage } from "react-native";
import Login from "../screens/Login";
import AuthStack from "./AuthStack";
import Auth from "./Auth";

export default ({ navigation } = this.props) => {
  AsyncStorage.clear().then(() => {
    return navigation.push("Login");
  });
};
