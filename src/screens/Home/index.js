import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

const Home = ({ Register } = this.props) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1
      }}
    >
      <Text>Home</Text>
      <Text>{Register.data.name}</Text>
      <Text>{Register.data.phone}</Text>
      <Text>{Register.data.address}</Text>
    </View>
  );
};

const MapStateToProps = state => ({
  Register: state.Register
});

export default connect(MapStateToProps)(Home);
