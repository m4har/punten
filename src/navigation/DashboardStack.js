import React from "react";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// SCREEN
import Home from "../screens/Home";
import News from "../screens/News";
import Profile from "../screens/Profile";

const DashboardStack = createBottomTabNavigator(
  {
    Home,
    News,
    Profile
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        console.log(routeName);
        if (routeName === "Home") {
          iconName = `home${focused ? "" : ""}`;
        } else if (routeName === "News") {
          iconName = `newspaper${focused ? "" : ""}`;
        } else if (routeName === "Profile") {
          iconName = `account${focused ? "" : ""}`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(DashboardStack);
