import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import { FS } from "../../../utility/Font";
import { moderateScale } from "../../../utility/Scale";

const InputPhone = ({ onChangeText } = this.props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: moderateScale(1),
        borderBottomColor: "#D9D9D9",
        marginLeft: moderateScale(20),
        marginRight: moderateScale(20),
        bottom: moderateScale(50)
      }}
    >
      <TouchableOpacity
        style={{
          borderRightWidth: moderateScale(1),
          borderRightColor: "#D9D9D9",
          paddingRight: moderateScale(5)
        }}
      >
        <Text style={{ fontSize: FS(3) }}>+62</Text>
      </TouchableOpacity>
      <TextInput
        style={{ fontSize: FS(3), width: "90%" }}
        placeholder="0811111"
        onChangeText={onChangeText}
        keyboardType="number-pad"
      />
    </View>
  );
};
InputPhone.propTypes = {
  onChangeText: PropTypes.func
};

export default InputPhone;
