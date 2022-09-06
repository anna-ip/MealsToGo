import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import { SettingsScreen } from '../../features/settings/screen/settingsScreen';
import { FavouritesScreen } from '../../features/settings/screen/favouritesScreen';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => (
  <SettingsStack.Navigator
    headerMode='screen'
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <SettingsStack.Screen
      options={{
        header: () => null,
      }}
      name='Settings'
      component={SettingsScreen}
    />
    <SettingsStack.Screen
      name='Favourites'
      component={FavouritesScreen}
      options={{ headerTitle: 'Favourites' }}
    />
  </SettingsStack.Navigator>
);
