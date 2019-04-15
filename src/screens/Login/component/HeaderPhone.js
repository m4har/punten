import React from "react";
import { View, Text } from "react-native";
import { FS } from "../../../utility/Font";
import { moderateScale } from "../../../utility/Scale";

const Header = () => {
  return (
    <View
      style={{
        paddingTop: moderateScale(25),
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20)
      }}
    >
      <View>
        <Text
          style={{
            color: "#4154AF",
            fontSize: FS(5)
          }}
        >
          Let's Roll
        </Text>
      </View>
      <View style={{ marginTop: moderateScale(10) }}>
        <Text style={{ color: "#000", fontSize: FS(3) }}>
          Are you set to enter a world of live entertainment
        </Text>
      </View>
    </View>
  );
};
export default Header;
