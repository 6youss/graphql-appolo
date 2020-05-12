import { AppRegistry } from "react-native";

import App from "@jouwal/core/src";

AppRegistry.registerComponent("jouwal", () => App);
AppRegistry.runApplication("jouwal", {
  rootTag: document.getElementById("root"),
});
