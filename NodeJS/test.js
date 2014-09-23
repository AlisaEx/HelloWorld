var request = require('request');
var options = {
  method: 'GET',
  json: {},
  uri: 'https://api.clever.com/v1.1/schools',
  headers: {
    Authorization: 'Bearer DEMO_TOKEN'
  }
};

request(options, function(err, response, body) { 

 });