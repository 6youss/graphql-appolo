import { AppRegistry } from "react-native";

import App from "@jouwal/core/src/App";

AppRegistry.registerComponent("zdoctor", () => App);
AppRegistry.runApplication("zdoctor", {
  rootTag: document.getElementById("root"),
});
