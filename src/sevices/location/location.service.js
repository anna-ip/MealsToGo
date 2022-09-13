import camelize from 'camelize';
import { host } from '../../utils/env';

export const locationRequest = (searchTerm) => {
  return fetch(
    `${host}/meals-to-go-f7f9f/us-central1/geocode?city=${searchTerm}`
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
