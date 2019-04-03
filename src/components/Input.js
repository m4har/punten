import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PropTypes from "prop-types";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { moderateScale, scale, verticalScale } from "../utility/Scale";
import { FS } from "../utility/Font";

const Input = (
  { placeholder, icon, onChangeText, secureTextEntry } = this.props
) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    // padding: FS(1),
    borderRadius: scale(50),
    margin: scale(5)
  },
  icon: {
    marginLeft: scale(5),
    fontSize: FS(3),
    color: "black"
  },
  input: {
    width: "90%",
    fontSize: FS(2),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(10)
  }
});
Input.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool.isRequired
};
Input.defaultProps = {
  secureTextEntry: false
};

export default Input;
