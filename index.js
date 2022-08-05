const { /* fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, */ nextISSTimesForMyLocation } = require('./iss');

//fetchMyIP((error, ip) => {
//  if (error) {
//    console.log("It didn't work!", error);
//    return;
//  }
//  console.log('It worked! Returned IP:', ip);
//
//  fetchCoordsByIP(ip, (err, data) => {
//    if (err) {
//      console.log("It didn't work!", err);
//      return;
//    }
//    console.log('It worked! Returned data:', data);
//  });
//
//  const someCoords = { latitude: '53.544389', longitude: '-113.4909267' }
//
//  fetchISSFlyOverTimes(someCoords, (err2, flyTimes) => {
//    if (err2) {
//      console.log("It didn't work!", err2);
//      return;
//    }
//    console.log('It worked! Returned data:', flyTimes);
//  });

  const printPassTimes = function(flyTimes) {
    for (const pass of flyTimes) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(pass.risetime);
      const duration = pass.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    }
  };

  nextISSTimesForMyLocation((error, flyTimes) => {
    if (error) {
      return console.log("It didn't work!", error);
    }
    printPassTimes(flyTimes);
  });
// });
