import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// RESPONSIVE
import { moderateScale, scale, verticalScale } from "../../../utility/Scale";
import { FS } from "../../../utility/Font";

const Header = () => {
  return (
    <View>
      <Icon name="airplane" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    textAlign: "center",
    fontSize: FS(13),
    margin: scale(20),
    color: "black"
  }
});

export default Header;
