import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

// DATA SCREEN
import Login from "../screens/Login";
import Register from "../screens/Register";
// DASHBOARD STACK
import DashboardStack from "./DashboardStack";
// AUTH STACK
import AuthStack from "./AuthStack";
// REGISTER
const AppNavigator = createSwitchNavigator(
  {
    AuthStack,
    DashboardStack: {
      screen: DashboardStack,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "AuthStack"
  }
);

export default createAppContainer(AppNavigator);
