import React from "react";
import { Text, View, Button, AsyncStorage } from "react-native";

export default class Profile extends React.Component {
  async Logout() {
    await AsyncStorage.clear();
    this.props.navigation.navigate("AuthStack");
  }
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Profile</Text>
        <Button title="LOGOUT" onPress={() => this.Logout()} />
      </View>
    );
  }
}
