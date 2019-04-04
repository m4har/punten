import { createAppContainer, createStackNavigator } from "react-navigation";

// DATA SCREEN
import Login from "../screens/Login";
import Register from "../screens/Register";
import Auth from "./Auth";
// REGISTER
const AppNavigator = createStackNavigator(
  {
    Login,
    Register,
    Auth
  },
  {
    initialRouteName: "Auth"
  }
);

export default createAppContainer(AppNavigator);
