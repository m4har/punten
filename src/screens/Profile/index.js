import React from "react";
import { Text, View, Button, AsyncStorage } from "react-native";
import Logout from "../../navigation/Logout";

export default class Profile extends React.Component {
  // async Logout() {
  //   await AsyncStorage.clear();
  //   this.props.navigation.navigate("AuthStack");
  // }
  componentDidMount() {
    // console.log(this.props);
  }
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Profile</Text>
        <Button title="LOGOUT" onPress={Logout} />
      </View>
    );
  }
}
