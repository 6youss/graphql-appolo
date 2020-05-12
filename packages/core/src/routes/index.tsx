import * as React from "react";
import { NativeRouter, Route, Switch } from "react-router-native";

import { View } from "react-native";
import { Register } from "../screens";
export const Routes = () => (
  <NativeRouter initialEntries={["/register"]}>
    <Switch>
      <View style={{ flex: 1 }}>
        <Route exact={true} path="/register">
          <Register />
        </Route>
      </View>
    </Switch>
  </NativeRouter>
);
