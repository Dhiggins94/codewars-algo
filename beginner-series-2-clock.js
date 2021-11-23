function past(h, m, s){
  //#Happy Coding! ^_^
  
  console.log(h)
    console.log(m)
  console.log(s)
//  a millisecond is 1k seconds
  let millisecond = s * 1000 
//    a minute is 60 minutes, 
  let minute = m * 60 * 1000
//   an hour is 60 minutes
   let hour = h * 60 * 60 * 1000

  return millisecond + minute + hour
}