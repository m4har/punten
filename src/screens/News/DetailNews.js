import React from "react";
import { Text, View, Alert, BackHandler } from "react-native";
import { AndroidBackHandler } from "./components/ActionHandler";

class DetailNews extends React.Component {
  componentWillUnmount() {
    console.log("removed");
  }
  handleBack = () => {
    if (true) {
      // do something
      Alert.alert("Alert Title", "My Alert Msg", [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.props.navigation.goBack() }
      ]);
      return true;
    }
    return false;
  };
  render() {
    return (
      <AndroidBackHandler onBackPress={this.handleBack}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Detail News</Text>
        </View>
      </AndroidBackHandler>
    );
  }
}

export default DetailNews;
