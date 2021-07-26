
function googleSpeed() {
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://roads.googleapis.com/v1/speedLimits?path=38.75807927603043,-9.03741754643809|38.6896537,-9.1770515|41.1399289,-8.6094075&key=AIzaSyDgXR256kjSq8iolzDaRWUO3rn1UkILWCM',
    headers: { }
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}


// returns int    ex)  50
function bingSpeed() {
  var axios = require('axios');

    var config = {
    method: 'get',
    url: 'https://dev.virtualearth.net/REST/v1/Routes/SnapToRoad?points=43.440652717902026,-80.50885835162578&includeSpeedLimit=true&includeTruckSpeedLimit=true&speedUnit=KPH&key=AnnFbf6tMYlE4VRd4aMCg9M4vXSMGUyjvk0AQE-mI7ae-jmwiT2z41PO5Z_9wVt9',
    headers: { }
    };

    axios(config)
    .then(function (response) {
      console.log(response.data["resourceSets"][0]["resources"][0]["snappedPoints"][0]["speedLimit"]);
      //console.log(response.data["resourceSets"][0]["resources"][0]["snappedPoints"][0]["truckSpeedLimit"]); //Truck speed also available
      })
      .catch(function (error) {
        console.log("##### ERROR #############################");
      console.log(error);
    });
}

bingSpeed();