import camelize from 'camelize';

export const locationRequest = (searchTerm) => {
  if (__DEV__) {
    return fetch(
      `http://e6c6-155-4-39-214.ngrok.io/meals-to-go-f7f9f/us-central1/geocode?city=${searchTerm}`
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
