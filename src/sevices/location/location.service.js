import camelize from 'camelize';
import { ngrokLocalhost } from '../../utils/env';

export const locationRequest = (searchTerm) => {
  if (__DEV__) {
    return fetch(
      `${ngrokLocalhost}/meals-to-go-f7f9f/us-central1/geocode?city=${searchTerm}`
    )
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.log('location:', error);
      });
  }
  return fetch(
    `http://localhost:5001/meals-to-go-f7f9f/us-central1/geocode?city=${searchTerm}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log('location:', error);
    });
};

export const locationTransform = (result) => {
  console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
