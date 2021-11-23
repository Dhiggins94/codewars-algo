function cockroachSpeed(s) {
  //Good Luck!
  let speed = Math.floor(s / 0.036) 
  console.log(speed)
  return speed
}

// refactor
function cockroachSpeed(s) {
  //Good Luck!
  let speed = Math.floor((s * 1000 * 100) / ( 60 * 60))
  return speed
}

// km = 1000 meters
// m = 100 cm
// seconds = 60 seconds
// hours = 60 minutes