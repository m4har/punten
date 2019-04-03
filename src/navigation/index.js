import { createAppContainer, createStackNavigator } from "react-navigation";

// DATA SCREEN
import Login from "../screens/Login";

// REGISTER
const AppNavigator = createStackNavigator({
  Login
});

export default createAppContainer(AppNavigator);
