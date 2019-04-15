import React from "react";
import { Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { FS } from "../../../utility/Font";
import { moderateScale } from "../../../utility/Scale";

const ButtonPhone = ({ onPress } = this.props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#4154AF",
        height: moderateScale(60),
        justifyContent: "center",
        width: "100%",
        alignItems: "center"
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: FS(3), color: "#fff" }}>Login</Text>
    </TouchableOpacity>
  );
};
ButtonPhone.propTypes = {
  onPress: PropTypes.func
};

export default ButtonPhone;
