import camelize from 'camelize';
import { ngrokLocalhost } from '../../utils/env';

export const restaurantsRequest = (location) => {
  if (__DEV__) {
    return fetch(
      `${ngrokLocalhost}/meals-to-go-f7f9f/us-central1/placesNearby?location=${location}`
    )
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.log('restaurant:', error);
      });
  }
  return fetch(
    `http://localhost:5001/meals-to-go-f7f9f/us-central1/placesNearby?location=${location}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log('restaurant:', error);
    });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });

  return camelize(mappedResults);
};
