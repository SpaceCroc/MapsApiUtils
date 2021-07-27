// Author : Sungsoo Kim
// Please contact through MS Teams for any concerns

const ZOOM_LEVEL = 19; // min 1 ~  max 19
const IMG_SIZE = 500; // square area of image in pixels
// Image format is hardcoded as jpeg
const BING_API_KEY = "AnnFbf6tMYlE4VRd4aMCg9M4vXSMGUyjvk0AQE-mI7ae-jmwiT2z41PO5Z_9wVt9"; //BING_API key
const SPEED_UNIT = "KPH"; // MPH for miles per hour

// returns img binary string
const getSatelliteImage = async function(latitude, longitude) {
    var axios = require('axios');
    var config = {
    method: 'get',
    url: `http://dev.virtualearth.net/REST/v1/Imagery/Map/AerialWithLabels/${latitude},${longitude}/${ZOOM_LEVEL}?mapSize=${IMG_SIZE},${IMG_SIZE}&format=jpeg&key=${BING_API_KEY}`,
    headers: { }
    };

    const response = await axios(config)
    //.then(function (response) {
        //console.log(JSON.stringify(response.data));
        console.log("map_utils.js => getSatelliteImage : Done ");
        return response.data;
    // })
    // .catch(function (error) {
    //     console.log("map_utils.js => getSatelliteImage : ##ERROR ");
    //     console.log(error);
    // });
}


// returns array of int ex) 77
const getElevation = async function(latitude, longitude) {
    var axios = require('axios');
    var config = {
    method: 'get',
    url: `http://dev.virtualearth.net/REST/v1/Elevation/List?points=${latitude},${longitude}&key=${BING_API_KEY}`,
    headers: { }
    };

    const response = await axios(config)
    //.then(function (response) {
        console.log(JSON.stringify(response.data.resourceSets[0].resources[0].elevations[0]));
        console.log("map_utils.js => getElevation : Done ");
        return JSON.stringify(response.data.resourceSets[0].resources[0].elevations[0]);
    //})
    // .catch(function (error) {
    //     console.log("map_utils.js => getElevation : ##ERROR ");
    //     console.log(error);
    // });
}


// returns int    ex)  50
const getSpeedLimit = async function(latitude, longitude) {
    var axios = require('axios');
    var config = {
        method: 'get',
        url: `https://dev.virtualearth.net/REST/v1/Routes/SnapToRoad?points=${latitude},${longitude}&includeSpeedLimit=true&includeTruckSpeedLimit=true&speedUnit=${SPEED_UNIT}&key=${BING_API_KEY}`,
        headers: { }
    };

    const response = await axios(config)
    // .then(function (response) {
        console.log(response.data["resourceSets"][0]["resources"][0]["snappedPoints"][0]["speedLimit"]);
        console.log("map_utils.js => getSpeedLimit : Done ");
        //console.log(response.data["resourceSets"][0]["resources"][0]["snappedPoints"][0]["truckSpeedLimit"]); //Truck speed also available
        return response.data["resourceSets"][0]["resources"][0]["snappedPoints"][0]["speedLimit"];
    // })
    // .catch(function (error) {
    //     console.log("map_utils.js => getSpeedLimit : ##ERROR ");
    //     console.log(error);
    // });
}


// returns array of four pairs of coordinates ex) [[x1,y1], [x2,y2], [x3,y3], [x4,y4]]
const getFourCoordinates = function(lat, lon) {
    //offsets in meters. For 500x500, 50 m
    let offset = 50;
    //for A (left bottom cornor)
    let cornor_A = calculateCoordinates(lat, lon, -offset, -offset); //left bottom
    let cornor_B = calculateCoordinates(lat, lon, offset, -offset); //left top
    let cornor_C = calculateCoordinates(lat, lon, offset, offset); //right top
    let cornor_D = calculateCoordinates(lat, lon, -offset, offset); //right bottom
    console.log(cornor_A, cornor_B, cornor_C, cornor_D);
    
}

function calculateCoordinates(lat, lon, nOffset, eOffset) {
    //Earth’s radius, sphere
    let Rad=6378137;

    //Coordinate offsets in radians
    let dLat = nOffset/Rad
    let dLon = eOffset/(Rad * Math.cos(Math.PI*lat/180))
    //OffsetPosition, decimal degreesg
    let newLat = lat + dLat * 180/Math.PI
    let newLon = lon + dLon * 180/Math.PI

    console.log(`${newLat},${newLon}`);
    return [newLat, newLon];
}

module.exports = {
    getElevation: getElevation,
    getSpeedLimit: getSpeedLimit,
    getSatelliteImage: getSatelliteImage,
    getFourCoordinates: getFourCoordinates
}