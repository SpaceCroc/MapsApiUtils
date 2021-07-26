//https://maps.googleapis.com/maps/api/staticmap?center=43.4793173,-80.52068&zoom=17&size=400x400&maptype=hybrid&key=AIzaSyDgXR256kjSq8iolzDaRWUO3rn1UkILWCM
//https://maps.googleapis.com/maps/api/staticmap?center=43.4793173,-80.52068&zoom=17&size=400x400&maptype=satellite&key=AIzaSyDgXR256kjSq8iolzDaRWUO3rn1UkILWCM

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/staticmap?center=43.4793173,-80.52068&zoom=17&size=400x400&maptype=hybrid&key=AIzaSyDgXR256kjSq8iolzDaRWUO3rn1UkILWCM',
  headers: { }
};

axios(config)
.then(function (response) {
  //console.log(JSON.stringify(response.data));
  console.log(response);
  //var image = document.createElement('img');
  //image.src = "data:image/png;base64," + base64JsonData;
})
.catch(function (error) {
  console.log(error);
});



//function dataURLtoFile(dataurl, filename) {
    // var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    //     bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    // while(n--){
    //     u8arr[n] = bstr.charCodeAt(n);
    // }
    // return new File([u8arr], filename, {type:mime});
//}
