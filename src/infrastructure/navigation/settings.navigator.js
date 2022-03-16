import React, { useEffect } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { SettingsScreen } from "../../features/settings/screen/settingsScreen";

const SettingStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => (
  <SettingStack.Navigator
    headerMode="screen"
    screenOptions={{
      cardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <SettingStack.Screen
      options={{ header: () => null }}
      name="Settings"
      component={SettingsScreen}
    />
    <SettingStack.Screen name="Favourites" component={() => null} />
  </SettingStack.Navigator>
);
