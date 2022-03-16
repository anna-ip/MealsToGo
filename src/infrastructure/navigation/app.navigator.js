import React, { useContext } from "react";
import { Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsContextProvider } from "../../../src/sevices/restaurants/restaurant.contex";
import { LocationContextProvider } from "../../../src/sevices/location/location.context";
import { FavouritesContextProvider } from "../../../src/sevices/favourites/favourites.context";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SafeArea } from "../../components/utility/safeArea";
import { MapScreen } from "../../features/map/screen/mapScreen";
import { AuthenticationContext } from "../../sevices/authentication/authentication.contex";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => {
  const { onLogOut } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Button title="logout" onPress={() => onLogOut()} />
    </SafeArea>
  );
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigation = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={
              (createScreenOptions,
              { headerShown: false },
              {
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
              })
            }
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
