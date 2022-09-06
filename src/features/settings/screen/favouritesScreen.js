import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { SafeArea } from '../../../components/utility/safeArea';
import React, { useContext } from 'react';
import { FavouritesContext } from '../../../sevices/favourites/favourites.context';
import { RestaurantInfoCard } from '../../restaurants/components/restaurantInfoCard';
import { Spacer } from '../../../components/spacer/spacer';
import { Text } from '../../../components/typography/text';
import { FadeInView } from '../../../components/animations/fadeAnimation';

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  console.log(favourites);

  return (
    <>
      {favourites.length > 0 ? (
        <SafeArea>
          <FavouritesList
            data={favourites}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('RestaurantDetail', {
                      restaurant: item,
                    })
                  }
                >
                  <Spacer position='bottom' size='large'>
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
      ) : (
        <NoFavouritesArea>
          <Text>No favourites yet</Text>
        </NoFavouritesArea>
      )}
    </>
  );
};

const FavouritesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const NoFavouritesArea = styled(SafeArea)`
  justify-content: center;
  align-items: center;
`;
