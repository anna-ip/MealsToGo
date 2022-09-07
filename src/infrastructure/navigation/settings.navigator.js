import React from "react";

import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import { CameraScreen } from "../../features/settings/screen/cameraScreen";
import { FavouritesScreen } from "../../features/settings/screen/favouritesScreen";
import { SettingsScreen } from "../../features/settings/screen/settingsScreen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => (
  <SettingsStack.Navigator
    headerShown="screen"
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <SettingsStack.Screen
      options={{
        header: () => null,
      }}
      name="Settings"
      component={SettingsScreen}
    />
    <SettingsStack.Screen
      name="Favourites"
      component={FavouritesScreen}
      options={{ headerTitle: "Favourites" }}
    />
    <SettingsStack.Screen
      name="Camera"
      component={CameraScreen}
      options={{ headerTitle: "Camera" }}
    />
  </SettingsStack.Navigator>
);
