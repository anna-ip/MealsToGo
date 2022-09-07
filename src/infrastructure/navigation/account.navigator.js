import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen } from "../../features/account/screen/accountScreen";
import { LoginScreen } from "../../features/account/screen/loginScreen";
import { RegisterScreen } from "../../features/account/screen/registerScreen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerShown="false">
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
