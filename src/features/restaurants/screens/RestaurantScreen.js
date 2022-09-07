import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import { FadeInView } from "../../../components/animations/fadeAnimation";
import { FavouritesBar } from "../../../components/favourite/favouritesBar";
import { Spacer } from "../../../components/spacer/spacer";
import { SafeArea } from "../../../components/utility/safeArea";
import { FavouritesContext } from "../../../sevices/favourites/favourites.context";
import { RestaurantsContext } from "../../../sevices/restaurants/restaurant.contex";
import { RestaurantInfoCard } from "../components/restaurantInfoCard";
import { Search } from "../components/search";

export const RestaurantsScreen = ({ navigation }) => {
  const [isToggled, setIsToggled] = useState(false);
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
