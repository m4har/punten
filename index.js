/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import CloudMessage from "./src/services/CloudMessage";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask(appName, () => CloudMessage);
