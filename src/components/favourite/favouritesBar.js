import React from "react";
import styled from "styled-components/native";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { CompactRestaurantInfo } from "../restaurant/compactRestaurantInfo";
import { Spacer } from "../spacer/spacer";
import { Text } from "../typography/text";

const FavouritesWrapper = styled.View``;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position="left" size="large">
        <Text variation="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <TouchableOpacity
              onPress={() => onNavigate("RestaurantDetail", { restaurant })}
              key={key}
            >
              <Spacer position="left" size="medium">
                <CompactRestaurantInfo restaurant={restaurant} />
              </Spacer>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
