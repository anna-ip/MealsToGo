import camelize from 'camelize';

export const restaurantsRequest = (location) => {
  if (__DEV__) {
    return fetch(
      `http://e6c6-155-4-39-214.ngrok.io/meals-to-go-f7f9f/us-central1/placesNearby?location=${location}`
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
