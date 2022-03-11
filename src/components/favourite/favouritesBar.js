import React from "react";
import styled from "styled-components/native";
import { ScrollView, View, TouchableOpacity } from "react-native";
import { CompactRestaurantInfo } from "../restaurant/compactRestaurantInfo";
import { Spacer } from "../spacer/spacer";

const FavouritesWrapper = styled.View``;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  return (
    <FavouritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <TouchableOpacity
              onPress={() => onNavigate("RestaurantDetail", { restaurant })}
            >
              <Spacer key={key} position="left" size="medium">
                <CompactRestaurantInfo restaurant={restaurant} />
              </Spacer>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
