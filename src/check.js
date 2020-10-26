
const checkDist = () => {
    
    function distance(lon1, lat1, lon2, lat2) {
      var R = 6371; // Radius of the earth in km
      var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
      var dLon = (lon2-lon1).toRad(); 
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * Math.sin(dLon/2) * Math.sin(dLon/2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      return d;
    };
  
    /** Converts numeric degrees to radians */
    if (typeof(Number.prototype.toRad) === "undefined") {
      // eslint-disable-next-line no-extend-native
      Number.prototype.toRad = function() {
        return this * Math.PI / 180;
      }
    };
  
    window.navigator.geolocation.getCurrentPosition((pos) => {
      let dist = distance(pos.coords.longitude, pos.coords.latitude, 25.937163, 41.913741 );
      console.log(Math.floor(dist))
      let roundDist =  Math.floor(dist);
      
      return roundDist 
    });

  };

  
export default checkDist