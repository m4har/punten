import { createAppContainer, createStackNavigator } from "react-navigation";

// DATA SCREEN
import Login from "../screens/Login";
import Register from "../screens/Register";
// DASHBOARD STACK
import DashboardStack from "./DashboardStack";

// REGISTER
const AppNavigator = createStackNavigator({
  Login,
  Register,
  DashboardStack: {
    screen: DashboardStack,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(AppNavigator);
