import React from "react";
import { View, SafeAreaView } from "react-native";
import { moderateScale } from "../../utility/Scale";
import HeaderPhone from "./component/HeaderPhone";
import InputPhone from "./component/InputPhone";
import ButtonPhone from "./component/ButtonPhone";

class Phone extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "space-between"
        }}
      >
        <HeaderPhone />
        <InputPhone />
        <ButtonPhone />
      </SafeAreaView>
    );
  }
}

export default Phone;
