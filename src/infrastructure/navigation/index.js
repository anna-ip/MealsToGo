import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthenticationContext } from "../../sevices/authentication/authentication.contex";
import { AccountNavigator } from "./account.navigator";
import { AppNavigation } from "./app.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
