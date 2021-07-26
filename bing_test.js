function get_elevation() {
    var axios = require('axios');

    var config = {
    method: 'get',
    url: 'http://dev.virtualearth.net/REST/v1/Elevation/List?points=35.89431,-110.72522,35.89393,-110.72578&key=AnnFbf6tMYlE4VRd4aMCg9M4vXSMGUyjvk0AQE-mI7ae-jmwiT2z41PO5Z_9wVt9',
    headers: { }
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data.resourceSets));
    console.log(JSON.stringify(response.data.resourceSets[0].resources[0].elevations));
    })
    .catch(function (error) {
    console.log(error);
    });
}

function get_satellite_image() {
    var axios = require('axios');

    var config = {
    method: 'get',
    url: 'http://dev.virtualearth.net/REST/v1/Imagery/Map/AerialWithLabels/43.47922157292618,-80.52791714375817/19?mapSize=500,500&format=jpeg&key=AnnFbf6tMYlE4VRd4aMCg9M4vXSMGUyjvk0AQE-mI7ae-jmwiT2z41PO5Z_9wVt9',
    headers: { }
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    console.log("done");
    })
    .catch(function (error) {
    console.log(error);
    });
}

function getFourCoordinates(lat, lon) {
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
//get_elevation();
//get_satellite_image();
getFourCoordinates(43.477426263536906,-80.52625147535028);