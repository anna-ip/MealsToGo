const { locations } = require('./geocode.mock');
const url = require('url');

module.exports.geocodeRequest = (request, response) => {
  const { city } = url.parse(request.url, true).query;
  const locationMock = locations[city.toLowerCase()];

  response.json(locationMock);
};
