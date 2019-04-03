import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { moderateScale, scale, verticalScale } from "../utility/Scale";
import { FS } from "../utility/Font";

const Button = ({ title, onPress } = this.props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: moderateScale(40),
    justifyContent: "center",
    borderRadius: moderateScale(30)
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: FS(3)
  }
});

export default Button;
